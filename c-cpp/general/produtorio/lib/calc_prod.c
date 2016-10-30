int recursiveProd(int *array, int prod, int i){
	if(i > array[0])
    return prod;
  if(array[i] > 0)
    prod = (prod * array[i]);
	i++;
	int result = recursiveProd(array, prod, i);
	return result;
}

int iterativeProd(int *array){
	int prod = 1;	
	for(int i = 1; i <= array[0]; i++){
    if(array[i] > 0)
      prod = (prod * array[i]); 
  }
		
	return prod;
}
