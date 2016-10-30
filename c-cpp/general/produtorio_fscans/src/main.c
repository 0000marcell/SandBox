#include <stdio.h>
#include <stdlib.h>

int main(){
  FILE file = fopen("./tmp/test.txt", "r+");
  if(file == NULL)
    printf("Error while reading file");
  else
    readFileToVec(file, array);
}