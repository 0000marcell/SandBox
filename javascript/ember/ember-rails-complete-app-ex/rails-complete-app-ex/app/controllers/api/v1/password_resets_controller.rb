class Api::V1::PasswordResetsController < ApplicationController
	before_action :get_user, only: [:edit, :update]
	before_action :valid_user, only: [:edit, :update]
	before_action :check_expiration, only: [:edit, :update]
	
	# remove this
  def new
  end

	def create
	  @user = User.find_by(email: params[:user][:email].downcase)
		if @user
			@user.create_reset_digest
			@user.send_password_reset_email
			render json: @user
		else
			render json: {error: 'user not found' }, status: 404
		end
	end

  def edit
  end

	def update
		flash.now[:green] = "Changing user"
		if params[:user][:password].empty?
			@user.errors.add(:password, "can't be empty")
			flash.now[:red] = "Password can't be blank"
			render 'edit'
		elsif @user.update_attributes(user_params)
			flash.now[:green] = "Password has been reset, you can login with your new password"
			render 'edit'
		elsif params[:user][:password] != params[:user][:password_confirmation]
			@user.errors.add(:password, "passwords dont'match")
			flash.now[:red] = "Your password and password confirmation must match"
			render 'edit'
		else
			render 'edit'
		end
	end

	private
		
		def user_params	
			params.require(:user).permit(:password, :password_confirmation)
		end

		def get_user
			@user = User.find_by(email: params[:email])
		end

		# Confirms a valid user.
		def valid_user
			unless (@user && @user.activated? && 
							@user.authenticated?(:reset, params[:id]))
				redirect_to root_url
			end	
		end

		# Checks expiration of reset token.
		def check_expiration
			if @user.password_reset_expired?
				flash[:danger] = "Password reset has expired."
				redirect_to new_password_reset_url
			end
		end
end
