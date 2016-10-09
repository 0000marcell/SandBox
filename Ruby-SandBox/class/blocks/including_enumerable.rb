class Document
	include Enumerable
	
	def initialize(*args)
		@words = args
	end

	def each
		@words.each {|word| yield(word)}
	end
end

d = Document.new('marcell', 'monteiro', 'zzzz', 'ccc')
puts d.include?('marcell')
puts d.sort
