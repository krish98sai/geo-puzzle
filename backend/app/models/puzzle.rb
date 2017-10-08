class Puzzle < ApplicationRecord
  attribute :title
  attribute :description
  attribute :longitude
  attribute :latitude
  attribute :length
  attribute :contained_posts

  reverse_geocoded_by(:latitude, :longitude)
end
