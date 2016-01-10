#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "../lib/calc_prod.h"
#include "../lib/vet_io.h"

int main(){
	FILE *file;
  int array[10], result;
  file = fopen("./tmp/test.txt", "r");
  printf("running produtorio");
  if(file == NULL)
    printf("problema ao abrir o arquivo");
  readFileToVec(file, array);
  result = recursiveProd(array, 1, 1);
  printf("resultado do recursiveProd: %d\n", result);
  result = iterativeProd(array);
  printf("resultado do iterativeProd: %d\n", result);
  file = fopen("./tmp/result.txt", "w");
  writeFileFromVec(file, array);
}
