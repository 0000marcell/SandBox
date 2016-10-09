class Parent
	@name = 'parent'

	def say
		puts Parent.name
	end
end

class Child < Parent
	@name = 'child'

	def say
		puts Child.name
	end
end

child = Child.new
child.say # child

parent = Parent.new
parent.say #parent
