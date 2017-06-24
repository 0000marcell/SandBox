package com.mmc.app;

import java.io.*;
import java.util.List;
import java.util.ArrayList;
import java.util.Objects;
import java.util.Random;

public class ListOfNumbers {
  private List<Integer> list;
  private static final int SIZE = 10;
  boolean isLeader = false;
  String serverId = Integer.toString(new Random().nextInt());

  public ListOfNumbers () {
    list = new ArrayList<Integer>(SIZE);
    for (int i = 0; i < SIZE; i++) {
      list.add(new Integer(i));
    }
  }

  public void writeList() throws IOException {
    // The FileWriter constructor throws IOException, which must be caught.
    PrintWriter out = new PrintWriter(new FileWriter("OutFile.txt"));

    for (int i = 0; i < SIZE; i++) {
      // The get(int) method throws IndexOutOfBoundsException, which must be caught.
      out.println("Value at: " + i + " = " + list.get(i));
    }
    out.close();
  }
  
  void checkIfIsLeader(String name){
    System.out.println("name: "+name);
    System.out.println("serverid: "+serverId);
    if(Objects.equals(name, "marcell")){
      System.out.println("true");
      isLeader = true;
    }else{
      System.out.println("false");
      isLeader = false;
    }
  }

  boolean getIsLeader(){
    System.out.println("isLeader: "+isLeader);
    if(isLeader){
      return true;
    }else{
      return false;
    }
  }
  
  public static void main(String args[]) {
    ListOfNumbers l = new ListOfNumbers(); 
    l.checkIfIsLeader(args[0]); 
    System.out.println("isLeader: "+l.getIsLeader());
  }
}
