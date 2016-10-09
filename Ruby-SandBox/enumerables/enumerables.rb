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
puts (1..100).detect {|i| i % 5 == 0 and i % 7 == 0}

# drop(n) -> array 
puts [1, 2, 3, 4].drop(3) # [3, 4]

# drop_while{|arr| block} -> array 
# drop elements up to, but not including , the first element for which the block return nil or false
p [1, 2, 3, 4, 5, 0].drop_while{ |n| n < 3 } # [3, 4, 5, 0]

# each_cons(n){...} -> nil
(1..10).each_cons(3){ |a| p a }

# each_entry{ |obj| block } -> enum
class Foo
	include Enumerable
	def each
		yield 1
		yield 2, 3
	end
end
Foo.new.each_entry{ |o| p o } # 1 [1, 2]

# each_slice(n) -> an_enumerator 
(1..10).each_slice(3){|a| p a } # [1, 2, 3] [4, 5, 6]

# each_with_index -> enum
# same as each but with index :D

# each_with_object -> an_enumerator

evens = (1..10).each_with_object([]) { |i, a| a << i*2 }
p evens


