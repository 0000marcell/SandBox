#ifndef stdio
  #include <stdio.h>
#endif

#ifndef stdlib
  #include <stdlib.h>
#endif

void printMatrix(char**);
void floodFill(int line, int column, char **matrix){
  if(matrix[line][column] != 'X'){
    matrix[line][column] = 'X';
    printMatrix(matrix);
  }
  floodFill(line, column++, matrix);
  floodFill(line, column--, matrix);
  floodFill(line++, column, matrix);
  floodFill(line--, column, matrix);
}

void printMatrix(char **matrix){
  for(int i = 1; i <= 20; i++){
    for(int j = 0; j <= 20; j++){
      printf("%c", matrix[i][j]);
    }
    printf("\n");
  }
}