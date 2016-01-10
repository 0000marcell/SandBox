int prod_rec(int Vet[],int Tam)
{
	if(Tam-1==0)
	{
		if(Vet[Tam-1]>0)
			return Vet[Tam-1];
		else
			return 1;
	}
	else
	{
		if(Vet[Tam-1]>0)
			return Vet[Tam-1]* prod_rec(Vet,Tam-1);
		else
			prod_rec(Vet,Tam-1);
	}
}

int prod_nrec(int Vet[], int Tam){
	int i, prod;
	for(i=Tam-1, prod=1; i >= 0; i--)
		if (Vet[i]>0)
			prod *= Vet[i];
	return prod;	
}

