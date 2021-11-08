# frozen_string_literal: true

class Location < ApplicationRecord
  belongs_to :area
  has_many :plantings
end
