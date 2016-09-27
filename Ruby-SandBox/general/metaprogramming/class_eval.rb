class Document
	def self.create_method(method_name)
		code = %Q{
			def #{method_name}(value)
				puts value
			end
		}
		class_eval(code)
	end
end

Document.create_method('say')
doc = Document.new
doc.say "testing!"

