class Document
	class << self
		def class_method
			puts "class method"
		end
	end
end

Document.class_method

document = Document.new
document.class.class_method


