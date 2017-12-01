#!bin/bash

g++ $1.cpp -o $1.out
chmod +x $1.out
./$1.out
