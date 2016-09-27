ENABLE_DOIT = false
class Document
	def self.enable_doit(cond)
		if cond
			def doit
				puts "we do do it :D"
			end
		else
			def doit
				puts "we dont doit :("
			end
		end
	end

	enable_doit(ENABLE_DOIT)
end

doc = Document.new
doc.doit
Document.enable_doit true
doc.doit
