require 'faker'

FactoryBot.define do
  factory :location, class: "Location" do
    name { Faker::Nation.capital_city }
    association :area, factory: :area
  end
end