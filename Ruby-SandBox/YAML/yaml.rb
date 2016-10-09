require 'yaml'

class Todo
	YAML_FILE = './todo.yml'

	def initialize
		@todo_obj = {}
	end
	
	##
	# load yaml file	
	
	def load
		@todo_obj = YAML.load_file(YAML_FILE)
	end

	##
	# write todo to the file
	
	def write
		File.open(YAML_FILE, 'w+'){ |f| f.write(@todo_obj.to_yaml ) }
	end

	##
	# add a new todo to a parent todo or create
	# a new root todo
	
	def add(child, parent = nil)
		@todo_obj[parent] = { child.to_sym }
		write
	end

	
	##
	# update a todo
	
	def update
	end

	##
	# delete a todo
	
	def delete
	end

end

