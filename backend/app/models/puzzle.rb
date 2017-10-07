class Puzzle < ApplicationRecord
  attribute :title
  attribute :description
  attribute :longitude
  attribute :latitude
  attribute :length
  attribute :contained_posts
end
