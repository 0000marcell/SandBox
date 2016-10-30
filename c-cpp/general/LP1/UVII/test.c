#include <stdlib.h>
#include <stdio.h>
#include <stdarg.h>
// funcao com numero variado de argumentos 

void func(int n, ...){
  va_list vl;  
  int x;
  va_start(vl, n);
  for(int i = 0; i < n, i++){
    int number = va_arg(vl, int);
  }
  va_end(vl);
}

int main(){
  func(3, 3, 4, 5); 
}

