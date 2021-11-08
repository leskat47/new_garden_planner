# frozen_string_literal: true

class CreateFlowerCharacteristics < ActiveRecord::Migration[6.1]
  def change
    create_table :flower_characteristics do |t|
      t.string :season
      t.string :color

      t.timestamps
    end
  end
end
