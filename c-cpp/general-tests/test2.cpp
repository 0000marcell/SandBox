#include <iostream>
using namespace std;
#include <array>

int main(){

  int a[5] = {0, 1, 2, 3, 4};
  int i = 5; 
  for(unsigned int j = 0; j < i; j++){
    for(unsigned int k = 0; k < i; k++){
      if(k > 1){
        break;
      }
    }
    cout << "it didn't work";
  }
  cout << "it did work";
}
