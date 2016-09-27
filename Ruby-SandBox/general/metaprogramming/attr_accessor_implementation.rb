class Object
	def self.attr_accessor(name)
		code = %Q{
			def #{name}=(value)
				#{name} = value
			end

			def #{name}
				#{name}
			end
		}
		class_eval(code)
	end
end
