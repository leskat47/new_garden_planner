class AreaSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :locations
  has_many :locations
end
