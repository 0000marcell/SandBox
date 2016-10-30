class Document
	puts instance_methods(false) # false means that we dont wanna see inherited methods

	def testing
	end

	puts instance_methods(false)
end
