module B
	def self.included(klass)
		klass.extend ClassMethods
	end

	module ClassMethods
		def test
			puts "testing!"
		end
	end
end

class A
	include B
end

A.test
