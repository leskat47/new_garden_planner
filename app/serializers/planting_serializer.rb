class PlantingSerializer < ActiveModel::Serializer
  attributes :id, :date_planted, :location, :plant
  belongs_to :plant, serializer: Plant
end
