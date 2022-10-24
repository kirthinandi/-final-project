class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :changes_in_skin
      t.string :duration
      t.string :positive
      t.string :negative
      t.boolean :repurchase
      t.string :image
      t.belongs_to :product, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
