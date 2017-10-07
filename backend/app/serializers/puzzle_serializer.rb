class PuzzleSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :longitude, :latitude, :length, :contained_posts
end
