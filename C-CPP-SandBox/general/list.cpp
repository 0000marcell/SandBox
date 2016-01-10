#include <stdio.h>
#include <stdlib.h>

struct Node {
  int x;
  Node *next;
};

struct List{
 struct Node* root;
};

typedef struct Node Node;
typedef struct List List;

// Create functions 
Node* createNode(){
 Node* node = (Node *) malloc(sizeof(Node));
 node->value = 0;
 node->next = NULL;
 return node;
}

List* createList(){
 List* list = (List *) malloc(sizeof(list));
 list->root = NULL;
 return list;
}

// print functions 
void printNode(Node* node){
 if(node == NULL){
    printf("Node was null\n");
  }else{
    printf("Value: %d, ",node->value);
    if(node->next == NULL)
      printf("Next: NULL\n", node->next);
    else
      printf("Next: %d\n", node->next->value);
  }
}

void printList(List* list){
  if(list->root == NULL){
    printf("Empty List");
  }else{
    Node* aux = list->root;
    printf("List: \n");
    while(aux != NULL){
      printf("\t %d \n", aux->value);
      aux = aux->prox;
    }
    free(aux);
    aux = NULL;
  }
}

Node* searchList(List* list, int value){
  if(list->root== NULL){
    printf("Empty List\n");
    return (Node *)NULL;
  }else{
    Node* aux = list->root;
    while(aux->value != value && aux->prox != NULL){
      aux = aux->prox;
    }
    if(aux->value == value){
      return aux;
    }
    aux = createNode();
    free(aux);
    aux = NULL;
    printf("Value not found");
    return aux;
  }
}

void insertEndOfList(List* list, int value){
  if(list->root == NULL){
    list->root = criaNode();
    list->root->value = value;
    list->root->prox = NULL;
  }else{
    Node* aux = list->root;
    while(aux->prox != NULL){
      aux = aux->prox;
    }
    aux->prox = createNode();
    aux = aux->prox;
    aux->value = value;
    aux->prox = NULL;
    aux = aux->prox;
    free(aux);
    aux = NULL;
  }
}


void insertRootList(List* list, int value){
  if(list->root == NULL){
    list->root = createNode();
    list->root->value= value;
    list->root->prox = NULL;
  }else{
    Node* aux = createNode();
    aux->value = value;
    aux->prox = list->root;
    list->root = aux;
    aux = createNode();
    free(aux);
    aux = NULL;
  }
}


Node* removeFromList(List* list, int value){
  if(list->root != NULL){
    Node* item_to_rem = searchList(list, value);
    Node* next_node = item_to_rem->next;
    
    if(aux == list->root){
     list->root = list->root->prox;
     aux->prox = createNode();
     free(aux->prox);
     aux->prox = NULL;
     return aux;
    }else{
      if(aux->prox != NULL){
        Node* aux2 = aux->prox;
        aux->value = aux2->value;
        aux->prox = aux2->prox;
        aux2->prox = NULL;
        free(aux2);
        aux2 = NULL;
        aux = createNode();
        aux->value = value;
        aux->prox = NULL;
        return aux;
      }else{
       Node* aux2 = list->root;
       while(aux2->prox != aux){
        aux2 = aux2->prox;
       }
       aux2->prox = createNode();
       free(aux2->prox);
       aux2->prox = NULL;
       aux2 = createNode();
       free(aux2);
       aux2 = NULL;
       return aux;
      }
    }
  }else{
   printf("Empty list");
   return (Node*)NULL;
  }
}




