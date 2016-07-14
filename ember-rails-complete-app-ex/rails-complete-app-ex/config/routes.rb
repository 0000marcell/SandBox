Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
			resources :tasks
      resources :tasks
    end
  end
  use_doorkeeper do
		controllers :tokens => 'custom_tokens'
	end
  namespace :api do
    namespace :v1 do
			resources :tasks
			resources :todos
      resources :users
		  resources :password_resets,     only: [:new, :create, :edit, :update]
    end
  end
	resources :account_activations, only: [:edit]
end
