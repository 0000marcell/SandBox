require 'delegate'

class Document
	def say
		puts "saying things!"
	end
end

class DocumentWrapper < SimpleDelegator
	def initialize()
		doc = Document.new
		super(doc)
	end
end


doc = DocumentWrapper.new
doc.say
