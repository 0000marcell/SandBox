module Finders
	def find
		puts "searching..."
	end
end

class Document 
	extend Finders
end

Document.find # searching...
