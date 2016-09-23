class Parent
	def self.who_am_i
		puts "The value of self is #{self}"
	end
end

class Child < Parent
end

# self is always the class where the class method was called
puts Child.who_am_i # The self is Child
