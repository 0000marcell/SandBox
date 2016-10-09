class Document
	def say
		puts "running"
	end

	at_exit do
		puts "its about to..."
	end

	at_exit do
		puts "go out..."
	end
end

doc = Document.new
doc.say
