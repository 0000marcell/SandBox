#include <iostream>

int main(){
  int binary = 0100; 
}

int binary_decimal(int binary){
  int decimal = 0, i = 0, rem;
  while(binary != 0){
    rem = n%10;
    n/=10;
    decimal += rem*pow(2,i);
    ++i;
  }
  return decimal;
}