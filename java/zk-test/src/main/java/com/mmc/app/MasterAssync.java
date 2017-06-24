package com.mmc.app;

import java.io.IOException;
import java.util.Random;
import java.lang.InterruptedException;

import org.apache.zookeeper.ZooKeeper;
import org.apache.zookeeper.Watcher;
import org.apache.zookeeper.WatchedEvent;
import org.apache.zookeeper.data.Stat;
import org.apache.zookeeper.CreateMode;
import org.apache.zookeeper.KeeperException;
import org.apache.zookeeper.AsyncCallback.StringCallback;
import org.apache.zookeeper.AsyncCallback.DataCallback;
import org.apache.zookeeper.KeeperException.NoNodeException;
import org.apache.zookeeper
        .KeeperException.ConnectionLossException;
import org.apache.zookeeper
        .KeeperException.NodeExistsException;
import org.apache.zookeeper.ZooDefs.Ids;
import org.apache.zookeeper.KeeperException.Code;

import org.apache.log4j.Logger;
import org.apache.log4j.BasicConfigurator;

public class MasterAssync implements Watcher {
  private static Logger logger = 
    Logger.getLogger(MasterAssync.class);
  private ZooKeeper zk;
  private String hostPort;
  private String serverId = 
    Integer.toString(new Random().nextInt());
  private boolean isLeader = false;

  MasterAssync(String hostPort) {
    this.hostPort = hostPort;
  }

  public void process(WatchedEvent e) {
    System.out.println(e);
  }
  
  public void runForMaster(){
    zk.create("/master", serverId.getBytes(),
        Ids.OPEN_ACL_UNSAFE,
        CreateMode.EPHEMERAL,
        masterCreateCallback, null);
  }

  StringCallback masterCreateCallback = 
    new StringCallback(){
    public void processResult(int rc, String path, 
        Object ctx, String name){
      switch(Code.get(rc)){
        case CONNECTIONLOSS:
          checkMaster();
          return;
        case OK:
          isLeader = true;
          break;
        default:
          isLeader = false;
      }
      System.out.println("Im "+(isLeader ? "" : "not") +
          " the learder");
    }
  };

  void checkMaster(){
    zk.getData("/master", 
        false, 
        masterCheckCallback, null);
  }

  DataCallback masterCheckCallback = new DataCallback(){
    public void processResult(int rc, String path, 
        Object ctx, byte[] data, 
        Stat stat){
      switch(Code.get(rc)) {
        case CONNECTIONLOSS:
          checkMaster();
          return;
        case NONODE:
          runForMaster();
          return;
      }
    }
  };

  void stopZK() throws InterruptedException, IOException {
    zk.close();
  }

  void startZK() throws IOException {
    zk = new ZooKeeper(hostPort, 15000, this);
  }

  public static void main(String args[]) throws Exception {
    BasicConfigurator.configure();
    if(args.length == 0){
     System.out.println("you need to pass the host port");
     return;
    }
    MasterAssync m = new MasterAssync(args[0]);
    m.startZK();
    m.runForMaster();
    // wait for a bit
    Thread.sleep(1000);
    m.stopZK();
  }
}
