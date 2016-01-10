#include <stdio.h>
#include <stdlib.h>

void maxMin(float*, float*);

int main(){
  float max = 4.5;
  float min = 6.0;
  maxMin(&max, &min);
  printf(" max: %f min: %f", max, min);
  return 0;
}

void maxMin(float *max, float *min){
  if(*max < *min){
    float tmp = *min;
    *min = *max;
    *max = tmp; 
  }
}