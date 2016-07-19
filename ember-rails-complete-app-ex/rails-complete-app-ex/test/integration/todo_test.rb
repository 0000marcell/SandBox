require "test_helper"

class TodosTest < ActionDispatch::IntegrationTest
	def setup
		@user = users(:johndoe)
		post '/oauth/token', 
				 {grant_type: 'password', username: @user.email, password: '123456'} 
		resp = JSON.parse(response.body)
		@header = {:access_token => resp["access_token"]}
	end

	test "get all the todos" do
		get '/api/v1/todos', @header
		assert_response :success
	end

	test "get specific todo" do
		get '/api/v1/todos/1', @header
		assert_response :success
		resp = JSON.parse(response.body)
		assert_equal 'Todo 1', resp["data"]["attributes"]["title"]
	end

	test "create a new todo" do
		@header[:todo] = { title: 'Todo 3', user_id: 1 }
		post '/api/v1/todos', @header
		assert_response :success
		resp = JSON.parse(response.body)
		assert_equal 'Todo 3', resp["data"]["attributes"]["title"]
	end

	test "edit a todo" do
		@header[:todo] = { title: 'Todo 1 Edited', user_id: 1}
		patch '/api/v1/todos/1', @header
		assert_response :success
		resp = JSON.parse(response.body)
		assert_equal 'Todo 1 Edited', resp["data"]["attributes"]["title"]
	end

	test "destroy a todo" do
		delete '/api/v1/todos/1', @header
		assert_response :success	
	end
end
