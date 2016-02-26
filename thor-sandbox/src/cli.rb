require 'thor'

module EmberRails
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

		desc 'new PATH', 'Create a new ember-rails app'
		#option :javascript_engine, :default => 'babeljs', :aliases => '-j'
		#option :file, :type => :array, :aliases => :files
		#option :force, :type => :boolean, :default => false
		#option :database, :required => true
		def new(app_name)
			say "instaling rails app", set_color(:magenta)
			run "rails new #{app_name} --skip-bundle"
		end
	end
end
