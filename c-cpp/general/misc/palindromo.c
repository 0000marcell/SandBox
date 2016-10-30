#include <stdio.h>
#include <stdlib.h>

char *getWord();
char testPalindrome(char*);
int  compare_strings(char*, char*);

int main(){
  char *word = getWord();
  if(testPalindrome(word)){
    printf("era palindrome");
  }else{
    printf("não era palindrome");
  }
}

char *getWord(){

  char testString[256];
  printf("%s\n", "insira a palavra para teste:");
  scanf("%s\n", testString);
  return testString;
}

int testPalindrome(char *word){

  char aux[sizeof(word)];
  for (int i = 0; i < sizeof(word); ++i)
    aux[i] = word[(sizeof(word) - i)];

  return compare_strings(word, aux)
}

int compare_strings(char *word1, char *word2){

  int i = 0;
  while(word1[i] == word2[i]){
    if(word1[i] == word2[i])
      break;
    i++
  }

  if(word1[i] == '\0' && word2[i] == '\0')
    return 0;
  else
    return 1;
}


