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
import org.apache.zookeeper.KeeperException.NoNodeException;
import org.apache.zookeeper
        .KeeperException.ConnectionLossException;
import org.apache.zookeeper
        .KeeperException.NodeExistsException;

import org.apache.zookeeper.ZooDefs.Ids;

import org.apache.log4j.Logger;
import org.apache.log4j.BasicConfigurator;

public class MasterSync implements Watcher {
 private static Logger logger = 
  Logger.getLogger(MasterSync.class);
 private ZooKeeper zk;
 private String hostPort;
 private String serverId = Integer.toString(new Random().nextInt());
 private boolean isLeader = false;

 MasterSync(String hostPort) {
  this.hostPort = hostPort;
 }
 
 void stopZK() throws Exception { zk.close();}

 void startZK() throws IOException {
  zk = new ZooKeeper(hostPort, 15000, this);
 }

 boolean checkMaster() {
   while(true){
    try{
      Stat stat = new Stat();
      byte data[] = zk.getData("./master", false, stat);
      isLeader = new String(data).equals(serverId);
      return true;
    } catch (NoNodeException e){
       return false;
    } catch (ConnectionLossException e){
    } catch (KeeperException e){
    } catch (InterruptedException e){
    }
   }
 }

 void runForMaster() throws InterruptedException {
   while (true){
     try{
      zk.create("/master",
       serverId.getBytes(),
       Ids.OPEN_ACL_UNSAFE,
       CreateMode.EPHEMERAL);
      isLeader = true;
      break;
     } catch (NodeExistsException e){
       isLeader = false;
       break;
     } catch (ConnectionLossException e){
     } catch (KeeperException e){
     } catch (InterruptedException e){
     }

     if (checkMaster()) break;
   }
   
 }

 public void process(WatchedEvent e) {
  System.out.println(e);
 }

 void isLeader() throws InterruptedException{
  if(isLeader){
    System.out.println("I'm the leader");
    Thread.sleep(60000);
   }else{
    System.out.println("Someone else is the leader"); 
   }
 }


  public static void main(String args[]) throws Exception {
   BasicConfigurator.configure();
   if(args.length == 0){
     System.out.println("you need to pass the host port");
     return;
   }
   MasterSync m = new MasterSync(args[0]);
   m.startZK();

   m.runForMaster();

   m.isLeader();
   
   // wait for a bit
   m.stopZK();
 }
}
