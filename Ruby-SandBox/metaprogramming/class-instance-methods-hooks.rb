
#including instance methods and
#class methods to a class with a module and the include hook
module UsefulMethods 
	module ClassMethods
		def a_class_method
		end
	end
	
	def self.included(host_class)
		host_class.extend(ClassMethods)
	end
end

class Host
	include UsefulMethods
end
