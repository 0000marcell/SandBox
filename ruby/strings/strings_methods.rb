# string * integer
puts "------------------------"
puts "string * integer"
puts "Ho!" * 3

# string <=> other_string
puts "------------------------"
puts "string <=> other_string"
puts "abcdef" <=> "abcde" # 1
puts "abcdef" <=> "abcdef" # 0
puts "abcdef" <=> "abcdefgh" # -1
puts "abcdef" <=> "ABCDEF" # 1

# string =~ regex -> fixnum or nil
puts "------------------------"
puts "string =~ regex"
puts "cat 9 tails" =~ /\d/

# index, range, start end, regex
puts "------------------------"
puts "index, range, start end, regex"
puts "marcell monteiro"[2, 5] # rcell
puts "marcell monteiro"[2..5] # rcel
puts "marcell"[/.l/] # el 
puts "marcell"["cell"] # cell

# capitalize -> new_str
puts "------------------------"
puts "Capitalize"
puts "marcell".capitalize # Marcell

# center 
puts "------------------------"
puts "center"
puts "marcell"
			.center(20, '$') # $$$marcell$$

# chars -> an_array
puts "------------------------"
puts "chars"
puts "marcell".chars # array m,a,r...

# chomp(separator) -> new_string
puts "------------------------"
puts "chomp(separator)"
puts "marcell".chomp('cell') #mar

# chop remove last character 
puts "marcell".chop # marcel

# clear, makes string empty
puts "marcell".clear # ""

# cont, contatenate string
puts "marcell".concat(' monteiro')

# delete all characters
puts "marcell".delete "aeiou" #mrcll

# downcase
puts "MARCELL".downcase # marcell

# each_char, each_line
# do exactly what is expcted
puts "marcell monteiro".each_char # returna a enumerator
"marcell monteiro".each_line('l') do |val|
	puts val
end

# empty? -> true or false
puts "marcell".empty? # false

# end_with? -> true or false
puts "marcell".end_with?("ell") # true

# eql?(other) -> true or false
# true strings are equal if they have the same length and content
puts "marcell".eql?('MARCELl') # false

# gsub(pattern, replacement) -> new_str
puts "marcell".gsub(/cell/, 'kell') # markell
puts "marcell".gsub(/[ae]/, 
										'a' => 4, 
										'e' => 3) #m4rc3ll
# include?(other_string) -> true or false
puts "marcell".include?('cell')

# index(string or regex) -> fixnum or nil
puts "marcell".index(/ell/) # 4

# replace entire string
puts "marcell".replace "cruz" # cruz

# insert(index) -> str
puts "marcell".insert(0, "m") # mmarcell

# intern -> symbol
puts "marcell".intern # :marcell

# length return length of string
puts "marcell".length # 7

# lines(separator=$/) -> an_array
puts "marcell".lines('c') # ['marc', 'ell'] 

# ljust -> new_str
puts "marcell".ljust(10) # marcell with 3 extra spaces

# lstrip -> new_str
puts " marcell".lstrip 

# rstrip -> new_str
puts "marcell  ".rstrip

# strip -> new_str
puts " marcell ".strip

# match(pattern) -> matchdata or nil
"marcell".match(/cell/){|m| puts m} # cell

# next -> new_str
puts "a".next # b

# partiion(regexp) -> [head, match, tail]
puts "marcell".partition("c") # ["mar", "c", "ell"]

# prepend(other_str) -> str
puts "marcell".prepend("mmm") # mmmarcell

# replace(other_str) -> str
puts "marcell monteiro".replace("cell") # cell

# reverse -> new_str
puts "marcell".reverse # llecram

# rindex -> fixnum
# return the last occurence of the given substring or pattern
puts "marcell marcell".rindex(/cell/) # 11

# scan(pattern){|match| block} -> src

"marcell monteiro cruz".scan(/\w+/) do |word|
	puts word
end

# slice(index), slice(start, length) ,
# slice(range), slice(regexp), slice(regexp, capture), slice(match_str) -> new_str or nil

puts "marcell".slice(2..6) # rcel

# split(pattern, limit) -> array
puts "marcell".split(/c/) # ['mar', 'ell']

# squeeze([other_str]*) -> new_str
puts "marcell".squeeze # marcel

# start_with -> true or false
puts "marcell".start_with? "m" # true

# strip -> new_str
puts "  marcell  ".strip # "marcell"
puts "\tmarcell\r\n".strip # marcell

# succ almost same as next 
# sub almost the same as gsub

# to_i to_f to_c to_r
puts "300/2".to_r # 150/1

# to_sym -> symbol
puts "marcell".to_sym

# upcase -> new_str
puts "marcell".upcase # MARCELL

# upto -> str
puts "9".upto("11").to_a
