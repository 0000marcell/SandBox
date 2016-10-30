class Document
	LISTENER = Proc.new do
		break # will rase a error
		puts "proc new"
	end

	def say
		LISTENER.call
	end
end

doc = Document.new
doc.say
