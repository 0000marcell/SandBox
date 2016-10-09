module Keep
	def self.included(klass)
		puts "included in #{klass}"
	end
end

class SimpleBaseClass
	include Keep
	def self.inherited(new_subclass)
		puts "Hey #{new_subclass} is now a subclass of #{self}!"
	end
end

class ChildClassOne < SimpleBaseClass
end


