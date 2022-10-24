class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :changes_in_skin, :duration, :positive, :negative, :repurchase, :image, :user_id
  has_one :product
  has_one :user
end
