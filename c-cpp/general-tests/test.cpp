#include <iostream>
using namespace std;

struct Node {
  int data;
  Node *next;
};

typedef struct Node Node;

Node* createNode(int data){
  Node* node = (Node *) malloc(sizeof(Node));
  node->next = NULL;
  node->data = data;
  return node;
};

bool checkList(Node* head){
  Node* aux = head;
  int result = 0;
  int i = 0;
  Node* a_n[100] = {};
  while(aux != NULL){
    for(unsigned int j = 0; j < i; j++){
      if(aux == a_n[j]){
        result = 1;
        break;
      }
    }
    if(result == 1){
      break;
    }
    a_n[i] = aux;
    aux = aux->next;
    i++;
  }
  return result; 
}

int main(){
  Node* head = createNode(1);
  Node* n2 = createNode(1);
  head->next = n2;
  n2->next = head;
  cout << checkList(head);
  return 0;
}


