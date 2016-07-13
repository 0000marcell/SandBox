Rails.application.routes.draw do
  use_doorkeeper do
		controllers :tokens => 'custom_tokens'
	end
  namespace :api do
    namespace :v1 do
			resources :todos
      resources :users
		  resources :password_resets,     only: [:new, :create, :edit, :update]
    end
  end
	resources :account_activations, only: [:edit]
end
