require 'spec_helper'

describe Todo do

	describe '#load' do
		it 'should load a todo' do
			todo = Todo.new
			obj = todo.load('./spec/mock/todo_tree.yml')
			expect(obj[:parent].empty?).to eq(false)
		end
	end

	describe '#add' do
		it 'should add a todo' do
			todo = Todo.new
			todo.add('new_child')
		end
	end
	
	describe '#write' do	
		it 'should write a new yml file' do
			todo = Todo.new
			todo.
			obj = { this: 'name' }
			obj.to_yaml
		end
	end
end
