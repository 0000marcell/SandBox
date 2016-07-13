class AccountActivationsController < ApplicationController
	def edit
		user = User.find_by(email: params[:email])
		if user && !user.activated? && user.authenticated?(:activation, params[:id])
			user.activate
			user.update_attribute(:activated,    true)
			user.update_attribute(:activated_at, Time.zone.now)
			@msg = 'User authenticated, you can login on the app!'
			render 'user_authenticated'
		else
			@msg = 'User already authenticated, you can login on the app!'
			render 'user_authenticated'
		end
	end
end
