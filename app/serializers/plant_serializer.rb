class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :exposure, :moisture, :description
end
