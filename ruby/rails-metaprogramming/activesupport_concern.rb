require 'active_support'

module MyConcern
	extend ActiveSupport::Concern

	def an_instance_method
		"an instance method"
	end

	module ClassMethods
		def a_class_method
			"a class method"
		end
	end
end

class MyClass
	include MyConcern
end

puts MyClass.new.an_instance_method
puts MyClass.a_class_method
