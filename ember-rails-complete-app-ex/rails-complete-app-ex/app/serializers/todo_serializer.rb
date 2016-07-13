class TodoSerializer < ActiveModel::Serializer
  attributes :id, :slug, :title
  has_one :user
end
