class CreatePuzzles < ActiveRecord::Migration[5.1]
  def change
    create_table :puzzles do |t|
      t.string :title
      t.text :description
      t.float :longitude
      t.float :latitude
      t.integer :length
      t.string :contained_posts

      t.timestamps
    end
  end
end
