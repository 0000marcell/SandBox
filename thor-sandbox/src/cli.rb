require 'thor'

module MyGem
	VERSION = '0.1.0'

	class Cli < Thor
		include Thor::Actions
		check_unknown_options!

		def self.exit_on_failure?
	    true
		end

		desc 'version', 'Display version'
		map %w[-v --version] => :version

		class_option 'verbose',  :type => :boolean, :default => false

		def version
			say "MyGem #{VERSION}"
		end

		desc 'new PATH', 'Create a new static website'
		option :javascript_engine, :default => 'babeljs', :aliases => '-j'
		option :file, :type => :array, :aliases => :files
		option :force, :type => :boolean, :default => false
		#option :database, :required => true
		def new(path)
			path = File.expand_path(path)
			raise Error, set_color("ERROR: #{path} already exists.", :red) if File.exist?(path)

			say "Creating site at #{path}"
			say options
		end
	end
end
