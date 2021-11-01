class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :plantings
  has_many :plantings

end
