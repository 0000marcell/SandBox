#include <iostream> 

int matrix[9][9];
int line = 2;
int column = 2;
int 
char direction[] = ['DOWN', 'LEFT', 'UP', 'RIGHT'];

int main(){
  fill_matrix();
}

int fill_matrix(){
  if(is_cell_empty()){
    fill_cell();
  }else{
    try_to_fill();
  }
}

int is_cell_empty(){
  if(matrix[line][column]){
    return 0;
  }else{
    return 1;
  }
}

int fill_cell(){
  matrix[line][column] = 1;
  try_next_cell();
}

int try_to_fill(direction){
  switch (direction){
    case 'DOWN':
      line++;
      break;
    case 'LEFT':
      column--;
      break;
    case 'UP':
      line--;
      break;
    case 'RIGHT':
      column++;
      break;
  }
  fill_matrix();
}