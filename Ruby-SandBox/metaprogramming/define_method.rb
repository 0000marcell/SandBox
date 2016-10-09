class Document
	define_method('say') do |text|
		puts text
	end
end

doc = Document.new
doc.say("something!")
