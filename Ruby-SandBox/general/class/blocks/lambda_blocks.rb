class Document 
	LISTENER = lambda do
		puts "lambda block!"
	end
	
	def say
		LISTENER.call
	end
end

doc = Document.new
doc.say


