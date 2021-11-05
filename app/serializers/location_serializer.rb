class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :plantings

  def plantings
    object.plantings.map do |planting|
      ::PlantingSerializer.new(planting).attributes
    end
  end
end
