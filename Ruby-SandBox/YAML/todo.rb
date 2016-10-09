require 'yaml'

class Todo
	YAML_FILE = './todo_tree.yml'

	def initialize
		@todo_obj = {}
	end
	
	##
	# load yaml file	
	
	def load(file_path = YAML_FILE)
		@todo_obj = YAML.load_file(file_path)
	end

	##
	# write todo to the file
	
	def write(file_path = YAML_FILE)
		File.open(file_path, 'w+'){ |f| f.write(@todo_obj.to_yaml ) }
	end

	##
	# add a new todo to a parent todo or create
	# a new root todo
	
	def add(child, parent = nil)
		if !parent
			@todo_obj[child.to_sym] = ""
		else
			@todo_obj[parent] = { child => ''}
		end
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

