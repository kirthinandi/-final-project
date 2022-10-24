class Product < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    validates_presence_of :name, :brand, :country, :type_of_product, :ingredients, :what_its_treating, :price, :image

    validates :name, uniqueness: true

    

end
