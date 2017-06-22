package com.mycompany.app;

/**
 * Hello world!
 *
 */
public class App {
  public static void main(String[] args){
    if(args.length == 0){
      System.out.println("pass your name as a argument!");
      return;
    }
    System.out.println("Hello "+args[0]);
  }
}
