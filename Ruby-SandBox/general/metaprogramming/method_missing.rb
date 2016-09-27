class Document
	def method_missing(method_name, *args)
		puts "#{method_name} is missing"
	end
end

doc = Document.new
doc.doit
