# frozen_string_literal: true

class Plant < ApplicationRecord
  has_many :plantings
end
