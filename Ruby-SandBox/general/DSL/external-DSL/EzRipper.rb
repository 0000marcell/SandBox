require './xmlripper'

class EzRipper
	def initialize(program_path)
		@ripper = XmlRipper.new
		parse_program(program_path)
	end

	def run(xml_file)
		@ripper.run(xml_file)
	end

	def parse_program(program_path)
		File.open(program_path) do |f|
			until f.eof?
				parse_statement(f.readline)
			end
		end
	end

	def parse_statement(statement)
		statement = statement.sub(/#.*/, '')
		case statement.strip
		when ''
			# Skip blank lines
		when /print\s+'(.*?)'/
			@ripper.on_path($1) do |el|
				puts el.text
			end
		when /delete\s+'(.*?)'/
			@ripper.on_path($1){|el| el.remove}
		when /replace\s+'(.*?)'\s+'(.*?)'$/
			@ripper.on_path($1){|el| el.remove }
		when /uppercase\s+'(.*?)'/
			@ripper.on_path($1){|el| el.text = el.text.upcase }
		when /print_document/
			@ripper.after do |doc|
				puts doc
			end
		else
			raise "Don't know what to do with: #{statement}"
		end
	end
end

EzRipper.new('edit.ezr').run('fellowship.xml')
