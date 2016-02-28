class String
	def json_key
		if self.include? '/'
			return_key = ":#{self.split('/')[1]}"
		else
			return_key = ":#{self}"
		end
		return_key
	end	

	def key
		":#{self.split(':')[0]}"	
	end
end
