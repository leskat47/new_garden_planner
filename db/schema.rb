# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_211_030_204_011) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'areas', force: :cascade do |t|
    t.string 'name'
    t.text 'description'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  create_table 'flower_characteristics', force: :cascade do |t|
    t.string 'season'
    t.string 'color'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  create_table 'locations', force: :cascade do |t|
    t.string 'name', null: false
    t.text 'description'
    t.bigint 'area_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['area_id'], name: 'index_locations_on_area_id'
  end

  create_table 'plantings', force: :cascade do |t|
    t.date 'date_planted'
    t.text 'description'
    t.bigint 'location_id', null: false
    t.bigint 'plant_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['location_id'], name: 'index_plantings_on_location_id'
    t.index ['plant_id'], name: 'index_plantings_on_plant_id'
  end

  create_table 'plants', force: :cascade do |t|
    t.string 'name'
    t.string 'exposure'
    t.string 'moisture'
    t.string 'description'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.bigint 'flower_characteristics_id'
    t.index ['flower_characteristics_id'], name: 'index_plants_on_flower_characteristics_id'
  end

  add_foreign_key 'locations', 'areas'
  add_foreign_key 'plantings', 'locations'
  add_foreign_key 'plantings', 'plants'
  add_foreign_key 'plants', 'flower_characteristics', column: 'flower_characteristics_id'
end
