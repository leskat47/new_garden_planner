class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :exposure
      t.string :moisture
      t.string :description

      t.timestamps
    end
  end
end
