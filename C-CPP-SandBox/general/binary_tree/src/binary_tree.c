#include <stdio.h>
#include <stdlib.h>

typedef struct Node Node;
typedef struct Tree Tree;

struct Node{
  int value;
  struct Node *leftNode;
  struct Node *rightNode;
};

struct Tree{
  struct Node *root;
};

Node* createNode();
Node* searchNode(Node*, int);
Tree *createTree();
void insertRecursive(Node*, Node*);
void insertNode(Tree*, int);
void freeTree(Tree*);
void freeNodes(Node*);

int main(){
  Tree *tree = createTree(); 
  int array[7] = {4, 2, 6, 1, 3, 5, 7};
  for(int i = 0; i < 7; i++){
    insertNode(tree, array[i]);
  }
  Node *node = searchNode(tree->root, 8);
  if(node)
    printf("%d\n", node->value);
  else
    printf("Value not found");
  freeTree(tree); 
}


Node* createNode(){
  Node *newNode = (Node *) malloc(sizeof(Node));
  newNode->leftNode = NULL;
  newNode->rightNode = NULL; 
  return newNode;
}

Node* searchNode(Node *node, int value){
  struct Node *rNode = NULL;
  if(node == NULL)
    return rNode;
  if(node->value == value){
    return node;
  }else{
    if(value < node->value){
      rNode = searchNode(node->leftNode, value);
    }else{
      rNode = searchNode(node->rightNode, value);
    }
  }
  return rNode;
}

void freeNodes(Node *node){
  if(node->leftNode != NULL){
    freeNodes(node->leftNode);
  }
  if(node->rightNode != NULL){
    freeNodes(node->rightNode);
  }
  free(node); 
}


Tree* createTree(){
  Tree *newTree = (Tree *) malloc(sizeof(Tree));
  newTree->root = NULL;
  return newTree;
}

void freeTree(Tree* tree){
  freeNodes(tree->root);
  free(tree);
}

void insertRecursive(Node *parent, Node *child){
  if(child->value < parent->value){
    if(parent->leftNode == NULL) 
      parent->leftNode = child;
    else
      insertRecursive(parent->leftNode, child);
  }else{
    if(parent->rightNode == NULL) 
      parent->rightNode = child;
    else
      insertRecursive(parent->rightNode, child);
  }
}

void insertNode(Tree *tree, int value){
  Node *newNode = createNode();
  newNode->value = value;
  if(tree->root == NULL)
    tree->root = newNode;
  else{
    insertRecursive(tree->root, newNode);
  }
}





