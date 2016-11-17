require "test_helper"

class AccountActivationTestAcceptance < Capybara::Rails::TestCase
	test "activation a account " do
		visit '/account_activations/2/edit?email=parkeergarage2%40gmail.com'
		assert_content page, "User authenticated"
	end

	test "try to activate account already activated" do 
		visit '/account_activations/1/edit?email=0000marcell%40gmail.com'
		assert_content page, "User already authenticated, you can login on the app!"
	end	

end
