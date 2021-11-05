require 'faker'

FactoryBot.define do
  factory :area , class: "Area" do
    name { Faker::Nation.capital_city }
    description { Faker::TvShows::DrWho.catch_phrase }
  end
end