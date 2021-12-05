# frozen_string_literal: true

class Planting < ApplicationRecord
  belongs_to :location
  belongs_to :plant
  has_one :area, through: :location
end
