#include<stdio.h>

int main(){
  float C[7] = {-10, 0, 10, 20, 30, 40, 50}; 
  float F[7] = {-14, 32, 50, 68, 86, 104, 122};
  printf("Celcius \t Fahrenheit \n");
  for (int i = 0; i < 7; ++i){
    printf("%.2f \t %.2f \n", C[i], F[i]);
  };
}