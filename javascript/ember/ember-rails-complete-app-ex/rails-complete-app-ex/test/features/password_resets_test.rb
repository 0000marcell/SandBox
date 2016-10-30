require "test_helper"

class PasswordResetsTestAcceptance < Capybara::Rails::TestCase
	def setup
		ActionMailer::Base.deliveries.clear
		@user = users(:johndoe)
	end

  test "update password with valid information" do
		visit edit_api_v1_password_reset_path({id: @user.id, email: @user.email})
		assert_content page, "Reset Password"
		fill_in 'Password',    with: '757575'
		fill_in 'Confirmation', with: '757575'
		click_button 'Update'
		page.must_have_content 'Password has been reset'
	end

	test "update password with blank password" do
		visit edit_api_v1_password_reset_path({id: @user.id, email: @user.email})
		assert_content page, "Reset Password"
		fill_in 'Password',    with: ''
		fill_in 'Confirmation', with: ''
		click_button 'Update'
		page.must_have_content "Password can't be blank"
	end

	test "update password with different password and password confirmation" do
		visit edit_api_v1_password_reset_path({id: @user.id, email: @user.email})
		assert_content page, "Reset Password"
		fill_in 'Password',    with: '1234'
		fill_in 'Confirmation', with: '2345'
		click_button 'Update'
		page.must_have_content "Your password and password confirmation must match"
	end
end
