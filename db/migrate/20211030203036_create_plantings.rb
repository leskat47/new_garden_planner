# frozen_string_literal: true

class CreatePlantings < ActiveRecord::Migration[6.1]
  def change
    create_table :plantings, id: :uuid do |t|
      t.date :date_planted
      t.text :description
      t.references :location, null: false, foreign_key: true, type: :uuid
      t.references :plant, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
