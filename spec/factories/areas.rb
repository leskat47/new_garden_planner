require 'faker'

FactoryBot.define do

  factory :area , class: "Area" do
    name { Faker::String }
    description { Faker::String }
    
  end
end