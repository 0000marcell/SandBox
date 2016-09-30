# word array
arr = %w{ marcell monteiro cruz }
puts arr

# arbitrary number of arguments

def func(*value)
	puts value
end

func 'marcell', 'monteiro', 'cruz'

# named parameters

def func2(string, value)
	puts "#{string} #{value}"
end

func2 'this is ', name: 'marcell', sirname: 'monteiro',
			lastname: 'cruz'

# inject 
nums = [0,1,2,3,4]
puts nums.inject(2){|sum, n| sum + n } 

# methods

# all?
# if is true for all is true
puts %w[ant bear cat].all?{|w| w.length >= 4 }

# any?
# if is true for any is true
puts %w[ant bear cat].any?{|w| w.length >= 4}

# chunk -> an_enumerator
# group items together based on a condition
[2, 1, 4, 4].chunk {|n|
	n.even?
}.each { |even, arr| 
	p [even, arr]
}

# collect  
value = ['marcell', 'monteiro', 'cruz'].collect do |word|
	word.upcase
end
puts value

# flatten 
p [[1, 2], [1, 3]].flatten

# flat_map do the same as above but apply the block for each item

# count -> int
# count the number of items, or if a block is given return the number of items where the condition is true

# cycle(n=nil) {|obj| block} -> nil
["marcell", "monteiro", "cruz"].cycle(2) { |x| puts x } # goes forever


# detect(ifnore = nil){|obj| block } -> obj or nil
(1..10).detect {|i| i % 5 == 0 and i % 7 == 0}

