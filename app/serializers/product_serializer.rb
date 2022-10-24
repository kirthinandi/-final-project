class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :brand, :country, :type_of_product, :ingredients, :what_its_treating, :directions, :price, :image

  has_many :reviews
end
