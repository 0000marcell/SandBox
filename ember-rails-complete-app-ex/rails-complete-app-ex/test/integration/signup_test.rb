require "test_helper"

class SignpuTest < ActionDispatch::IntegrationTest
	test "Creates a user with valid information" do
		post '/api/v1/users', {name: 'John Doe', email: 'newuser@gmail.com', 
												   password: '123456', password_confirmation: '123456'}
		assert_response :success
		response_json = JSON.parse(response.body)
		assert_equal '3', response_json['data']['id']
	end
	
	test "Creates a user with invalid information" do
		post '/api/v1/users', {name: 'John Doe', email: 'invalidemail@@com.',
												   password: '123456', password_confirmation: '123456'}
		assert_response 422
		response_json = JSON.parse(response.body)
		assert_equal ['is invalid'], response_json['email']
	end

	test "Creates a user missing information" do
		post '/api/v1/users', {name: 'john doe'}
		assert_response 422
		response_json = JSON.parse(response.body)
		assert_equal ["can't be blank", "is invalid"], response_json['email']
		assert_equal ["can't be blank"], response_json['password']
	end

	test "Creates a new user with invalid password" do
		post '/api/v1/users', {name: 'John Doe', email: 'newuser@gmail.com',
												   password: '234', password_confirmation: '234'}
		assert_response 422
		response_json = JSON.parse(response.body)
		assert_equal ['is too short (minimum is 6 characters)'], response_json['password']
	end

	test "Creates a user that already exists" do
		post '/api/v1/users', {name: 'John doe', email: '0000marcell@gmail.com',
												   password: '123456', password_confirmation: '123456'}
		assert_response 422
		response_json = JSON.parse(response.body)
		assert_equal ['has already been taken'], response_json['email']
	end
end
