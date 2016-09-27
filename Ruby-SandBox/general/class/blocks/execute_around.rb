class Document
	attr_accessor :contents, :value
	def initialize
		@value = "something"
		@contents = []
		yield(self)
	end

	def say
		puts @contents
	end
end

d = Document.new do |doc|
	doc.contents << "marcell"
	doc.contents << "monteiro"
	doc.contents << "cruz"
end

d.say
