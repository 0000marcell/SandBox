all:
	rm -rf ./build/produtorio
	gcc ./lib/*.c ./src/main.c -o ./build/produtorio
	chmod +x ./buid/produtorio

debug:
	gcc -g ./lib/*.c ./src/main.c -o ./build/produtorio
	sudo gdb ./build/produtorio

vet_io:
	gcc -g ./lib/vet_io.c -o ./build/vet_io
	sudo gdb ./build/vet_io

clean:
	rm ./build/*
