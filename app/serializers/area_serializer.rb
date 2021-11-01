class AreaSerializer < ActiveModel::Serializer
  attributes :id, :name, :locations
  has_many :locations
end
