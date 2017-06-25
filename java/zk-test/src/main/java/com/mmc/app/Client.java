import java.io.Closeable;
import java.io.IOException;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CountDownLatch;

import org.apache.zookeeper.AsyncCallback.DataCallback;
import org.apache.zookeeper.AsyncCallback.StatCallback;
import org.apache.zookeeper.AsyncCallback.VoidCallback;
import org.apache.zookeeper.CreateMode;
import org.apache.zookeeper.KeeperException;
import org.apache.zookeeper.WatchedEvent;
import org.apache.zookeeper.Watcher;
import org.apache.zookeeper.Watcher.Event.EventType;
import org.apache.zookeeper.ZooDefs.Ids;
import org.apache.zookeeper.data.Stat;
import org.apache.zookeeper.ZooKeeper;
import org.apache.zookeeper.AsyncCallback.StringCallback;
import org.apache.zookeeper.KeeperException.Code;
import org.apache.zookeeper
        .KeeperException.NodeExistsException;
import org.apache.zookeeper
        .KeeperException.ConnectionLossException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Client implements Watcher {
  ZooKeeper zk;
  String hostPort;

  Client(String hostPort) { this.hostPort = hostPort; }

  void startZK() throws Exception {
    zk = new ZooKeeper(hostPort, 15000, this);
  }
  
  String name;
  String queueCommand(String command) throws KeeperException {
    while (true) {
      try {
        name = zk.create("/tasks/task-",
        command.getBytes(), Ids.OPEN_ACL_UNSAFE,
        CreateMode.PERSISTENT_SEQUENTIAL);
        return name;
        break;
      } catch (NodeExistsException e) {
        throw new Exception(name + 
            " already appears to be running");
      } catch (ConnectionLossException e) {
      }
    }
  }

  public void process(WatchedEvent e) { 
   System.out.println(e); }

  public static void main(String args[]) throws Exception {
    Client c = new Client(args[0]);
    c.startZK();
    String name = c.queueCommand(args[1]);
    System.out.println("Created " + name);
  }
}
