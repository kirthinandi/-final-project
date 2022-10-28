class Review < ApplicationRecord
  belongs_to :product
  belongs_to :user

  validates :rating, numericality: {greater_than_or_equal_to: 1, less_than_or_equal_to: 10}
  validates_presence_of :rating, :changes_in_skin, :duration, :positive, :negative
  validates_inclusion_of :repurchase, in: [true, false]
end
