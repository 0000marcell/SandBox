package com.mycompany.app;

import org.apache.log4j.Logger;
import org.apache.log4j.BasicConfigurator;

public class App {
  static Logger logger = 
      Logger.getLogger(App.class);
  public static void main(String[] args){
    BasicConfigurator.configure(); 
    logger.info("dependencies !!!");
    if(args.length == 0){
      System.out.println("pass your name as a argument!");
      return;
    }
    System.out.println("Hello "+args[0]);
  }
}
