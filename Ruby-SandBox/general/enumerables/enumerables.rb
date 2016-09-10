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
