class Document
	attr_accessor :name

	def say
		puts @name
	end
end

def Document.another 
	puts @name
	puts 'class method'
end

doc = Document.new
doc.name = 'marcell'
doc.say
Document.another
