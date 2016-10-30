require 'yaml'

class Todo

	class UndefinedNode < StandardError; end

	def initialize(file)
		@file = file ? file : './todo_tree.yml'
		@todo_obj = {}
	end
	
	##
	# load yaml file	
	
	def load
		@todo_obj = YAML.load_file(@file)
		@todo_obj = {} if !@todo_obj  
		@todo_obj
	end

	##
	# write todo to the file
	
	def write
		File.open(@file, 'w+'){ |f| f.write(@todo_obj.to_yaml ) }
	end

	##
	# add a new todo to a parent todo or create
	# a new root todo
	
	def add(child, parent = nil)
		if !parent
			@todo_obj[child] = ""
		else
			@todo_obj[parent] = { child => ''}
		end
		write
	end

	##
	# get a todo object 
	
	def get(node)
		fail Todo::UndefinedNode, 'invalid node', 
			caller if @todo_obj[node].nil?
		@todo_obj[node]
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

