class MySingleton
	# attempt to limit access to the constructor
	private_class_method :new
	# class variable instance
	def self.instance
		@instance ||= self.new
	end

	def add_up
		@value
		puts @value + 1
	end
end

n = MySingleton.instance
n.add_up


