require 'thor'

module EmberRails
	VERSION = '0.1.0'

	class Cli < Thor
		include Thor::Actions
		check_unknown_options!
		
		def self.source_root
			File.dirname(__FILE__) + '../templates/'
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

		desc 'new PATH', 'Create a new ember-rails app'
		#option :javascript_engine, :default => 'babeljs', :aliases => '-j'
		#option :file, :type => :array, :aliases => :files
		#option :force, :type => :boolean, :default => false
		#option :database, :required => true
		def new(app_name)
			say "instaling rails app", set_color(:magenta)
			run "rails new #{app_name} --skip-bundle"
			say "Copying Gefile", set_color(:magenta)
			copy_file 'Gemfile', "#{app_name}/"
			say "Copying applicaion.rb", set_color(:magenta)
			copy_file 'application.rb', "#{app_name}/config/"
			run "bundle install --without production"
			run "ember new frontend --skip-git"
			run "rails generate ember:init"
			cd frontend
			ember install ember-cli-rails-addon
			ember g adapter application
			set_color purple
			echo 'fixing adapter'
			printf "import DS from 'ember-data';

		export default DS.RESTAdapter.extend({
			namespace: 'api', 
			shouldReloadAll: function(){
				return true;
			},
			shouldBackgroundReloadRecord:function(){
				return false;
			}
		});" > app/adapters/application.js
			cd ..
			printf "Rails.application.routes.draw do\n\tmount_ember_app :frontend, to: '/'\nend" > config/routes.rb
			rake ember:install
			git init
			echo "frontend/node_modules/*" >> .gitignore
			echo "frontend/bower_components/*" >> .gitignore
			git add --all
			git commit -m 'new ember rails app'

		end
	end
end
