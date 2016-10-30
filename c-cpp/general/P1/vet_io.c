#include <stdio.h>

int vet_in(char NomeArq[], int Vetor[])
{
	FILE* pArq = NULL;
	int Tam = 0, i;
	
	if (!(pArq = fopen(NomeArq,"r")))
	{
		printf("Arquivo não pode ser aberto\n");
		return -1; 
	}
	else
	{
		if(fscanf(pArq,"%d", &Tam)!=1)
		{
			printf("Cabeçalho do arquivo inválido\n");
			return -2;
		}
		else
		{
			for (i=0; i<Tam; i++)
				if (fscanf(pArq,"%d", &Vetor[i])!=1)
				{
					printf("Arquivo corrompido\n");
					return -3;
				} 
			fclose(pArq);
			if (ferror(pArq))
			{
				printf("Arquivo não pode ser fechado adequadamente\n");
				return -4;
			} 
			else
				return Tam;		
		}

	}
}

int vet_out(char NomeArq[], int Vetor[], int Tam)
{
	FILE* pArq = NULL;
	int i;
	
	if (!(pArq = fopen(NomeArq,"w")))
	{
		fprintf(stderr, "Arquivo de saída não pode ser aberto\n");
		return -1; 
	}
	else
	{
		if(fprintf(pArq,"%d\n", Tam)<1){
			printf("Não foi possível criar o cabeçalho\n");
			return -2;
		}
		else
		{
			for (i=0; i<Tam; i++)
				if (fprintf(pArq,i<Tam-1?"%d\t":"%d", Vetor[i])<1)
				{
					printf("Não foi possível incluir os dados no arquivo\n");
					return -3;
				} 
			fflush(pArq);			
			fclose(pArq);
			if (ferror(pArq))
			{
				printf("Arquivo não pode ser fechado adequadamente\n");
				return -4;
			} 
			else
				return Tam;		
		}
	}
} 

