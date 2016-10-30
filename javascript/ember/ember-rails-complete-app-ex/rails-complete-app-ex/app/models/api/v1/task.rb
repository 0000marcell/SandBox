class Api::V1::Task < ActiveRecord::Base
  belongs_to :user
end
