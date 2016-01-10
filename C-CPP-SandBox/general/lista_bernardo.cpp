#include <stdio.h>
#include <stdlib.h>

struct Noh_s{
 int valor;
 struct Noh_s* prox;
};

struct Lista_s{
 struct Noh_s* inicio;
};

typedef struct Noh_s Noh_s;
typedef struct Lista_s Lista_s;

Noh_s* criaNoh_s(){
 Noh_s* noh = (Noh_s *) malloc(sizeof(Noh_s));
 noh->valor = 0;
 noh->prox = NULL;
 return noh;
}

void printaNoh_s(Noh_s* noh){
 if(noh == NULL){
    printf("\nNOH NULL\n");
  }else{
    printf("\nValor: %d, ",noh->valor);
    if(noh->prox == NULL)
      printf("Prox: NULL\n", noh->prox);
    else
      printf("Prox: %d\n",noh->prox->valor);
  }
 }
     
Lista_s* criaLista_s(){
 Lista_s* lista = (Lista_s *) malloc(sizeof(Lista_s));
 lista->inicio = NULL;
 return lista;
}

void printaLista_s(Lista_s* lista){
  if(lista->inicio == NULL){
    printf("LISTA VAZIA");
  }else{
    Noh_s* aux = lista->inicio;
    printf("Lista: \n");
    while(aux!=NULL){
      printf("\t %d \n", aux->valor);
      aux = aux->prox;
    }
    free(aux);
    aux = NULL;
  }
}
     
Noh_s* buscaLista_s(Lista_s* lista, int valor){
  if(lista->inicio == NULL){
    printf("LISTA VAZIA");
      return (Noh_s *)NULL;
    }else{
      Noh_s* aux = lista->inicio;
      while(aux->valor != valor && aux->prox != NULL){
        aux = aux->prox;
      }
      if(aux->valor == valor){
        return aux;
      }
      aux = criaNoh_s();
      free(aux);
      aux = NULL;
      printf("ELEMENTO NAO EXISTE");
      return aux;
  }
}
     
void ordenaBolhaLista_s(Lista_s* lista){
  if(lista->inicio == NULL){
    printf("LISTA VAZIA");
  }else{
          
  }
}
     
void ordenaSelectionLista_s(Lista_s* lista){
}
     
void ordenaInsertionLista_s(Lista_s* lista){
}
     
void insereFinalLista_s(Lista_s* lista, int valor){
  if(lista->inicio == NULL){
    lista->inicio = criaNoh_s();
    lista->inicio->valor = valor;
    lista->inicio->prox = NULL;
  }else{
    Noh_s* aux = lista->inicio;
    while(aux->prox != NULL){
      aux = aux->prox;
    }
    aux->prox = criaNoh_s();
    aux = aux->prox;
    aux->valor = valor;
    aux->prox = NULL;
    aux = aux->prox;
    free(aux);
    aux = NULL;
  }
}

void insereFimLista_s(Lista_s* lista, int valor){
  insereFinalLista_s(lista,valor);
}
     
void insereInicioLista_s(Lista_s* lista, int valor){
  if(lista->inicio == NULL){
    lista->inicio = criaNoh_s();
    lista->inicio->valor = valor;
    lista->inicio->prox = NULL;
  }else{
    Noh_s* aux = criaNoh_s();
    aux->valor = valor;
    aux->prox = lista->inicio;
    lista->inicio = aux;
    aux = criaNoh_s();
    free(aux);
    aux = NULL;
  }
}
     
void insereOrdenadoLista_s(Lista_s* lista, int valor, void (*modo)(Lista_s*)){
}
     
Noh_s* removeLista_s(Lista_s* lista, int valor){
 if(lista->inicio == NULL){
   printf("LISTA VAZIA");
   return (Noh_s *)NULL;
  }else{
  Noh_s* aux = lista->inicio;
  while(aux->valor != valor && aux->prox != NULL){
    aux = aux->prox;
  }
  if(aux->valor != valor){
    printf("ELEMENTO NAO EXISTE");
    return (Noh_s *)NULL;
  }else{
    if(aux == lista->inicio){
     lista->inicio = lista->inicio->prox;
     aux->prox = criaNoh_s();
     free(aux->prox);
     aux->prox = NULL;
     return aux;
    }else{
      if(aux->prox != NULL){
        Noh_s* aux2 = aux->prox;
        aux->valor = aux2->valor;
        aux->prox = aux2->prox;
        aux2->prox = NULL;
        free(aux2);
        aux2 = NULL;
        aux = criaNoh_s();
        aux->valor = valor;
        aux->prox = NULL;
        return aux;
      }else{
       Noh_s* aux2 = lista->inicio;
       while(aux2->prox != aux){
           aux2 = aux2->prox;
           }
       aux2->prox = criaNoh_s();
       free(aux2->prox);
       aux2->prox = NULL;
       aux2 = criaNoh_s();
       free(aux2);
       aux2 = NULL;
       return aux;
      }
    }
   }
  }
}

void destroiLista_s(Lista_s* lista){
}

void teste(){
 int i;
 Lista_s* lista = criaLista_s();
 for(i=0;i<5;i++)
  insereFinalLista_s(lista,5*i);
 printaLista_s(lista);
 printaNoh_s(buscaLista_s(lista,10));
 printaNoh_s(removeLista_s(lista,10));
 printaLista_s(lista);
 printf("\nFIM TESTE\n");
 // getch();
}

int main(void){
  teste();
  return 0;
}
