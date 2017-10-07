class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :description
      t.float :longitude
      t.float :latitude
      t.integer :num_in_series
      t.string :content_type
      t.string :url

      t.timestamps
    end
  end
end
