class Api::V1::TaskSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_one :user
end
