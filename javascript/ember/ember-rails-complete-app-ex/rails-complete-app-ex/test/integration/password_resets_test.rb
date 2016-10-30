require 'test_helper'

class PasswordResetsTest < ActionDispatch::IntegrationTest
	def setup
		ActionMailer::Base.deliveries.clear
		@user = users(:johndoe)
	end

	test "creates password reset with valid information" do
		post '/api/v1/password_resets', {user: {email: @user.email}}
		assert_response :success
	end

	test "creates password reset with invalid information" do
		post '/api/v1/password_resets', {user: {email: "invalide@user.com"}}
		json = JSON.parse(response.body)
		assert_response :missing
		assert_equal 'user not found', json['error']
	end
end
