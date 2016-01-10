#ifndef stdio
	#include <stdio.h>
#endif

#ifndef stdlib
	#include <stdlib.h>
#endif

#ifndef string
	#include <string.h>
#endif

void readFileToVec(FILE *file, int *array){
	char numberOfItemsLine[256], itemsLine[256];
	int  numberOfItems, numberOfChars;
	fgets(numberOfItemsLine, sizeof(numberOfItemsLine), file);
	numberOfItems = *numberOfItemsLine - '0';
	if(numberOfItems > 10){
		printf("O vetor lido no arquivo nao pode ser maior que 10");
		return;
	}
	fgets(itemsLine, sizeof(itemsLine), file);
	fclose(file);
	char *token;
	array[0] = numberOfItems;
	token = strtok(itemsLine, "\t");
	for(int i = 0; i < numberOfItems; i++){
	  array[i+1] = strtoul(token, (char **)NULL, 10);
		token = strtok(NULL, "\t");
	}
	return;
}

void writeFileFromVec(FILE *file, int *array){
	int iNumberOfItems = array[0];
	char sNumberOfItems[16], string[16];
	sprintf(sNumberOfItems, "%d", array[0]);
	fputs(sNumberOfItems, file);
	fputc('\n', file);
	for(int i = 1; i <= iNumberOfItems; i++){
		sprintf(string, "%d", array[i]);
		fputs(string, file);
		if((i + 1) <= iNumberOfItems){
			fputc('\t', file);
		}else{
			fputc('\n', file);
		}
	}
	fclose(file);
}

void *readLines(FILE *file, char *array){
	char c;
	int i;
	do {
    c = fgetc (file);
    if(c == '\n') 
    i++;
  } while (c != EOF);	
}

