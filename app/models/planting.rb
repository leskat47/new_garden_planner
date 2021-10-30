class Planting < ApplicationRecord
  belongs_to :location
  belongs_to :plant
end
