require 'active_support/core_ext/string/inflections'

class String
	def json_key
		if self.include? '/'
			return_key = ":#{self.split('/')[1]}"
		else
			return_key = ":#{self}"
		end
		return_key
	end	

	def key
		":#{self.split(':')[0]}"	
	end

	def rails
		args = self.split(',')
		string = ""
		args.each do |arg|  
			string << arg + " "
		end	
		string
	end

	def params
		args = self.split(',')
		string = ""
		args.each do |arg|
			string << ":#{arg.split(':')[0]},"	
		end
		string[-1] = ""
		string
	end

	def controller
		if self.include? '/'
			args = self.split('/')
			path = "app/controllers/#{args[0]}/#{args[1].pluralize}_controller.rb"
		else
			path = "app/controllers/#{self.pluralize}_controller.rb"
		end
	end

	def input
		args = self.split(',')
		string = ""
		args.each do |arg|
			string << "<label>#{arg.split(':')[0]}</label>/n"
			string << "{{input type='text' value=#{arg.split(':')[0]}}}/n"
		end
		return string
	end
end
