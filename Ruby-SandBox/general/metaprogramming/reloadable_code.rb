# we can run the code and realod the class using its methods Document.reload
class Document
	def self.reload
		remove_instance_methods
		load(__FILE__)
	end

	def self.remove_instance_methods
		instance_methods(false).each do |method|
			remove_method(method)
	end
end
