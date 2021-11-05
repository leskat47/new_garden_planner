require 'faker'

FactoryBot.define do
  factory :planting, class: "Planting" do
    date_planted { Faker::Date.backward(days: 14) }
    description { Faker::TvShows::TheITCrowd.quote }
    association :location, :plant
  end
end