class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :brand
      t.string :country
      t.string :type_of_product
      t.string :ingredients
      t.string :what_its_treating
      t.string :directions
      t.string :price
      t.string :image

      t.timestamps
    end
  end
end
