#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "../lib/floodfill.h"

void loadMatrix(FILE*, char**, int*);

int main(){
  // char[120] file_name;
  // scanf("%s", &file_name);

  FILE *file = fopen("./tmp/floodfill.txt", "r+");
  if(file == NULL){
    printf("Erro arquivo inexistente\n"); 
  }
  char **matrix;
  int startingPos[2];
  loadMatrix(file, matrix, startingPos);
  floodFill(startingPos[0], startingPos[1], matrix);
}

void loadMatrix(FILE *file, char **matrix, int *startingPos){
  char c;
  matrix[20][20];
  int line = 1, column = 1, d1, d2;
  c = fgetc(file);
  while((c = fgetc(file)) != EOF){
    if(line == 21){
      c = fgetc(file);
      fscanf(file, "%d %d",  &d1, &d2);
      startingPos[0] = d1;
      startingPos[1] = d2;
      break;
    }
    if(!strcmp(&c, "\n"))
      matrix[line][column] = c;

    if(column == 20){
      line++;
      column = 1;
    }else{
      column++;
    }
  } 
}