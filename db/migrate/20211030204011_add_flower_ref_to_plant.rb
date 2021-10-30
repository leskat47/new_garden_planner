class AddFlowerRefToPlant < ActiveRecord::Migration[6.1]
  def change
    add_reference :plants, :flower_characteristics, null: false, foreign_key: true
  end
end
