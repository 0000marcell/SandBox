require 'thor'

module EmberRails
	VERSION = '0.1.0'

	class Cli < Thor
		include Thor::Actions
		check_unknown_options!
		argument :name
		def self.source_root
			File.dirname(__FILE__) + '/../templates/'
		end

		def self.exit_on_failure?
	    true
		end

		desc 'version', 'Display version'
		map %w[-v --version] => :version

		class_option 'verbose',  :type => :boolean, :default => false

		def version
			say "MyGem #{VERSION}"
		end
		
		desc 'new PATH', 'create a new dir'
		def do_something
			template('new/template.tt', "test/#{name}.js")
		end

		desc 'new PATH', 'Create a new ember-rails app'
		#option :javascript_engine, :default => 'babeljs', :aliases => '-j'
		#option :file, :type => :array, :aliases => :files
		#option :force, :type => :boolean, :default => false
		#option :database, :required => true
		def new(app_name)
			say "instaling rails app", set_color(:magenta)
			run "rails new #{app_name} --skip-bundle"
			say "Copying Gefile", set_color(:magenta)
			copy_file 'new/Gemfile', "#{app_name}/"
			say "Copying applicaion.rb", set_color(:magenta)
			copy_file 'new/application.rb', "#{app_name}/config/"
			run "cd #{app_name} && bundle install --without production"
			run "cd #{app_name} && ember new frontend --skip-git"
			run "cd #{app_name} && rails generate ember:init"
			run "cd #{app_name}/frontend && ember install ember-cli-rails-addon"
			run "cd #{app_name}/frontend && ember g adapter application"
			say "changing adapter", set_color(:magenta)
			copy_file 'new/application.js', "#{app_name}/frontend/app/adapters/"
			say "creating routes.rb", set_color(:magenta)
			copy_file 'new/routes.rb', "#{app_name}/config/"
			run "cd #{app_name} && rake ember:install"
			run "cd #{app_name} && git init"
			say "including node modules in git ignore", set_color(:magenta)
			run "cd #{app_name} && git add --all"
			run "cd #{app_name} && git commit -m 'new ember rails app'"
		end
	end
end
