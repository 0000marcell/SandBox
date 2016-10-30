#include <stdio.h>
#include <stdlib.h>

void readFileToVet(FILE*, char*);
void writeFileFromVet(FILE*, char*);

void readFileToVet(FILE *file, char *array){
  int digit, iArray, numberOfItems;
  fscanf(file, "%d", &numberOfItems);
  array[0] = numberOfItems;
  for(int i = 0; i < numberOfItems; i++){
    fscanf(file, "%d", &digit);
    if(digit >= 0){
      iArray++;
      array[iArray] = digit;
    }else{
      array[0] = (array[0] - 1);
    }
  } 
  return;
}


void writeFileFromVet(FILE *file, char *array){
  for(int i = 0; i < array[0]; i++){
    if(!i)
      fprintf(file, "%d\n", array[i]);
    fprintf(file, "%d\t", array[i]);
  }
  return;
}