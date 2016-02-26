require 'thor'

module MyGem
	VERSION = '0.1.0'

	class Cli < Thor
		desc 'version', 'Display version'
		map %w[-v --version] => :version

		def version
			say "MyGem #{VERSION}"
		end

		desc 'new PATH', 'Create a new static website'
		def new(path)
			path = File.expand_path(path)
			say "Creating site at #{path}"
		end
	end
end
