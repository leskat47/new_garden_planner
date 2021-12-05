# frozen_string_literal: true

class AddFlowerRefToPlant < ActiveRecord::Migration[6.1]
  def change
    add_reference :plants, :flower_characteristics, foreign_key: true, type: :uuid
  end
end
