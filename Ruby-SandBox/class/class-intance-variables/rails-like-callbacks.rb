class Parent
	@cb
	class << self
		attr_accessor :cb
		def after_method(method)
			puts self
			Parent.cb = { class: self, method: method }
		end
	end
	
	def do_something
		Parent.cb[:class]
		# do something here to call the method
	end
end

class Child < Parent
	after_method :cb

	def start
		do_something
	end

	def cb
		puts 'do it!'
	end
end

child = Child.new
child.start
