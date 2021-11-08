# frozen_string_literal: true

class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.text :description
      t.references :area, null: false, foreign_key: true

      t.timestamps
    end
  end
end
