require 'spec_helper'
require 'fileutils'

describe Todo do
	
	before :each do
		@todo = Todo.new('./spec/mock/todo_tree.yml')
		@todo.load
	end

	after :each do
		FileUtils.rm('./spec/mock/todo_tree.yml')
		FileUtils.touch('./spec/mock/todo_tree.yml')
	end

	describe '#load' do
		it 'should load a todo' do
			todo_load = Todo.new('./spec/mock/not_empty_tree.yml')
			obj = todo_load.load
			expect(obj['parent']).to eq('not empty')
		end
	end

	describe '#add #get' do
		it 'rase error when node don't exist' do
			@todo.get('something')
			expect(@todo.get('something')).to 
		end

		it 'should add a todo' do
			@todo.add('parent')
			expect(@todo.get('parent').empty?).to eq(false)
		end

		it 'should append to other item' do
			todo = Todo.new('./spec/mock/todo_tree.yml')
			todo.load
			todo.add('parent')
			todo.add('child', 'parent')
			expect(todo.get('parent')).to eq('child')
		end
	end
	
	describe '#write' do	
		it 'should write a new yml file' do
			todo = Todo.new
			obj = { this: 'name' }
			obj.to_yaml
		end
	end
end
