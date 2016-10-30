class Parent
	@default_font = :times
	class << self
		attr_accessor :default_font
	end

	def say
		puts @default_font
	end
end

Parent.default_font = :test
puts Parent.default_font
