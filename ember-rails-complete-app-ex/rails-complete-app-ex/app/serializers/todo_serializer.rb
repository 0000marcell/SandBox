class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title
  belongs_to :user_id
end
