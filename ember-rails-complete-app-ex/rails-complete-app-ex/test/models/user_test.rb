require 'test_helper'

class UserTest < ActiveSupport::TestCase
	def setup
		@user = User.find('1')
	end

  test "Change activation status of the user" do
		@user.update_attribute(:activated,    false)
		@user.update_attribute(:activated_at, 'not changed')
		@user.activate
		assert_equal true, @user.activated
		assert_not_equal 'not changed', @user.activated_at
	end

	test "Returns a valid digest string" do
		string = User.digest('1')
		result = BCrypt::Password.new(string).is_password?('1')
		assert_equal result, true
	end

	test "Returns a random token" do
		result = User.new_token
		assert_not_equal result, nil
	end
	
	test "sets password reset attributes" do
		@user.update_attribute(:reset_digest,	 'not changed')
		@user.update_attribute(:reset_sent_at, 'not changed')
		@user.create_reset_digest
		assert_not_equal 'not changed', @user.reset_digest
		assert_not_equal 'not changed', @user.reset_sent_at
	end

	test "verify if the password has expired" do
		@user.update_attribute(:reset_sent_at, 3.hours.ago)
		assert_equal true, @user.password_reset_expired?
	end
	
	# full mail integration test
	test "verify if the password reset email is being sent" do
		@user.reset_token = User.new_token
		@user.send_password_reset_email
	end

	# full mail integration test
	test "verify if the activation email is being sent" do
		user = User.create(name:'Marcell', email: '000marcell@gmail.com', 
											 password: '123456')	
		user.send_activation_email
	end
end
