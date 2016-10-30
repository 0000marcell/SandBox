#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void copy(char[], char[]);
void pCopy(char*, char*);

int main(){
  char String1[] = "marcell";
  char String2[] = "monteiro";
  printf("STRING ANTES %s \n", String1);
  pCopy(String1, String2);
  printf("STRING DEPOIS %s \n", String1);
  return 0;
}

void copy(char to[], char from[]){
  int i;
  i = 0;
  while ((to[i] = from[i]) != '\0')
    i++;

  if(to[strlen(to) - 1] != '\0')
    to[strlen(to) -1] = '\0';
  printf("%lu", strlen(to));
}

void pCopy(char *pS1, char *pS2){
  while((*pS1 = *pS2) != '\0'){
    pS1++;
    pS2++;
  }
  // (*(pS1+strlen(pS1))) = '\0';
}