# frozen_string_literal: true

class PlantingSerializer < ActiveModel::Serializer
  attributes :id, :date_planted, :location, :plant, :area
  belongs_to :plant, serializer: Plant
  has_one :area, serializer: Area
end
