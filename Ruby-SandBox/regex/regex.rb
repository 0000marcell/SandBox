name = 'marcell'

# only letters 
puts "only letters"
puts name =~ /marcell/ # 0
puts "\n"

# dot 
puts "dot match"
puts name =~ /./ # 0
puts "\n"

# one character at a time 
puts "one character at a time"
puts name =~ /[a]/ # 1
puts "\n"

# set 
puts "set of characters"
puts name =~ /[acl]/ # 1
puts "\n"

# range
puts "range of characters"
puts "bcd" =~ /[b-c]/
puts "bcd" =~ /b-d/ # not gonna match 
puts "\n"

# comman sets
puts "common sets"
puts "badfgs" =~ /\w/ # any letter
puts "   " =~ /\s/ # match white space tabs
puts "1232424adbsdf" =~ /\d/ # match any digit
puts "\n"

# separate statements
puts "separate statements with ()"
puts "bcdzzzzzz123" =~ /bcd.*123|234/ # 0
puts "\n"

# or character
puts "or character |"
puts "bcd" =~ /(bcd)|123/ # 0
puts "\n"

# global variables $1 $2 etc...
puts "global variables:"
"ab:cd" =~ /([a-z]+):([a-z]+)/
puts $1 # ab
puts $2 # cd

# + one or more times
puts "+ sign one or more times:"
"abcd" =~ /([a-z])/ # without +
puts $1 # a
"abcd" =~ /([a-z]+)/ # with +
puts $1 # abcd

# zero or one time
puts "? sign zero or one time:"
"aaa" =~ /(a*)/ # will match aaa
puts $1
"aba" =~ /(a?)/ # will match a
puts $1
