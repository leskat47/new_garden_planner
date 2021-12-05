# frozen_string_literal: true

class CreateAreas < ActiveRecord::Migration[6.1]
  def change
    create_table :areas, id: :uuid   do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
