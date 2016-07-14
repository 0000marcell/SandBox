require "test_helper"

class TasksTest < ActionDispatch::IntegrationTest
	def setup
		@user = users(:johndoe)
		post '/oauth/token', 
				 {grant_type: 'password', username: @user.email, password: '123456'} 
		resp = JSON.parse(response.body)
		@header = {:access_token => resp["access_token"]}
	end

	test "get all the tasks" do
		get '/api/v1/tasks', @header
		assert_response :success
	end

	test "get specific task" do
		get '/api/v1/tasks/1', @header
		assert_response :success
		resp = JSON.parse(response.body)
		assert_equal 'Task 1', resp["data"]["attributes"]["title"]
	end

	test "create a new task" do
		@header[:task] = { title: 'Task 3', user_id: 1 }
		post '/api/v1/tasks', @header
		assert_response :success
		resp = JSON.parse(response.body)
		assert_equal 'Task 3', resp["data"]["attributes"]["title"]
	end

	test "edit a task" do
		@header[:task] = { title: 'Task 1 Edited', user_id: 1}
		patch '/api/v1/tasks/1', @header
		assert_response :success
		resp = JSON.parse(response.body)
		assert_equal 'Task 1 Edited', resp["data"]["attributes"]["title"]
	end

	test "destroy a task" do
		delete '/api/v1/tasks/1', @header
		assert_response :success	
	end
end
