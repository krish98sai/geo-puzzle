class Post < ApplicationRecord
  attribute :title
  attribute :description
  attribute :longitude
  attribute :latitude
  attribute :num_in_series
  attribute :content_type
  attribute :url

  reverse_geocoded_by(:latitude, :longitude)
end
