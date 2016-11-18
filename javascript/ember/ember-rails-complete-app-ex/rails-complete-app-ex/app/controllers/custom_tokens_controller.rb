class CustomTokensController < Doorkeeper::TokensController
	def create
		puts "#### CREATE"
		debugger
		response = strategy.authorize
		body = response.body
		if response.status == :ok
			user = User.find(response.token.resource_owner_id) rescue nil
			unless user.nil?
				body[:user] = { id: user.id, email: user.email, name: user.name , username: user.username}
			end
		end
		self.headers.merge! response.headers
		self.response_body = body.to_json
		self.status        = response.status
		rescue Doorkeeper::Errors::DoorkeeperError => e
			handle_token_exception e
	end
end
