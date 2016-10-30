#include <stdio.h>
#include <string.h>

int main(int argc, char *argv[])
{
  int i = 0;
  int sum = 0;
  while(argv[i]){
    int num = atoi(argv[i]);
    sum += num; 
    i++;
  }
  printf("%d\n", sum);
  return 0;
}


