require 'thor'
require 'active_support/core_ext/string/inflections'
require '/Users/marcell/Documents/github/SandBox/thor-sandbox/lib/string'


module EmberRails
	VERSION = '0.1.0'

	class Cli < Thor
		include Thor::Actions
		check_unknown_options!
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
			say "Copying Gemfile", set_color(:magenta)
			copy_file 'new/Gemfile', "#{app_name}/Gemfile"
			say "Copying applicaion.rb", set_color(:magenta)
			copy_file 'new/application.rb', "#{app_name}/config/application.rb"
			run "cd #{app_name} && bundle install --without production"
			run "cd #{app_name} && ember new frontend --skip-git"
			run "cd #{app_name} && rails generate ember:init"
			run "cd #{app_name}/frontend && ember install ember-cli-rails-addon"
			run "cd #{app_name}/frontend && ember g adapter application"
			say "changing adapter", set_color(:magenta)
			copy_file 'new/application.js', "#{app_name}/frontend/app/adapters/application.js"
			say "creating routes.rb", set_color(:magenta)
			copy_file 'new/routes.rb', "#{app_name}/config/routes.rb"
			run "cd #{app_name} && rake ember:install"
			run "cd #{app_name} && git init"
			say "including node modules in git ignore", set_color(:magenta)
			run "cd #{app_name} && git add --all"
			run "cd #{app_name} && git commit -m 'new ember rails app'"
		end

		desc 'deplay-to-heroku APP_NAME', 'deploy the current app to heroku'	
		def deploy_to_heroku(app_name)
			run "rails generate ember:heroku"
			run "git add --all"
			run "git commit -m 'preparing to deplay to heroku'"
			run "heroku create #{app_name}"
			run "heroku buildpacks:add --index 1 heroku/nodejs"
			run "heroku buildpacks:add --index 2 heroku/ruby"
			run "heroku config:set NPM_CONFIG_PRODUCTION=false"
			run "heroku config:unset SKIP_EMBER"
			run "git push heroku master"
			run "heroku run rake db:schema:load"
			run "heroku open"
		end

		desc 'resource RESOURCE_NAME, ARGS', 'creates a new resource'
		def resource(resource_name, args)
			rails g scaffold #{resource_name} title isCompleted:boolean
			args						= args.split(':')
			resource_s			= resource_name.gsub('/', '_')
			@class_name			= resource_name.camelize.pluralize
			@resource_s			= resource_s
			@resources			= "@#{resource_s.pluralize}"
			@resource				= "@#{resource_s}"			
			@db							= resource_name.camelize 							
			@resource_key   = resource_name.json_key
			@resource_args  = args
			template('new/controller.erb', 'test/test.rb')
		end
	end
end
