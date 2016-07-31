# verify if a string is inside a file
counter = 1
file = File.new("file.txt", "r")
while (line = file.gets)
	puts "#{counter}: #{line}"
	counter = counter + 1
end
file.close
