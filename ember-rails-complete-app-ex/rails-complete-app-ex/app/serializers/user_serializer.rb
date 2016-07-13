class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email
	has_many :todos, embed: :ids, embed_key: :title
end
