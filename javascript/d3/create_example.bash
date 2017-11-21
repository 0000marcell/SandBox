#!bin/bash

mkdir $1
mkdir "$1/js" 
touch "$1/index.html"
touch "$1/js/index.js"
cp "selection/js/d3.min.js" "$1/js"
cp "selection/index.html" "$1"
