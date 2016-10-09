class Parent
	@@name = 'parent'

	def say
		puts @@name
	end
end

class Child < Parent
	@@name = 'little child'
end

child = Child.new
child.say
parent = Parent.new
parent.say # will return little child instead of parent
