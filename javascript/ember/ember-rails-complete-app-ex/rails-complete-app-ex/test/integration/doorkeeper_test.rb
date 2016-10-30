require "test_helper"

class DoorkeeperTest < ActionDispatch::IntegrationTest
	def setup
		@user = users(:johndoe)
	end

	test "requires a new token with valid information" do 
		post '/oauth/token', 
				 {grant_type: 'password', username: @user.email, password: '123456'} 
		assert_response :success
	end

	#test "requires a new token with invalid information" do
	#	post '/oauth/token', 
	#			 {grant_type: 'password', username: @user.email, password: '12ddd3456'} 
	#	assert_response :success
	#end
end
