#include <stdio.h>
#include "vet_io.h"
#include "prod.h"
int main (void){
  int Vetor[10], Tam, i;
  if((Tam = vet_in("vetor1.txt", Vetor))>0){
  	vet_out("vetor2.txt", Vetor, Tam);
  	printf("\nTestando o cálculo do produtório.\n   Valor esperado para o arquivo vetor1.txt: 360\n");
  	printf("Produtório não recursivo %d\n", prod_nrec(Vetor, Tam));
  	printf("Produtório recursivo %d\n\n", prod_rec(Vetor, Tam));
  }else{
    printf("O arquivo estava vazio");
  }
}
