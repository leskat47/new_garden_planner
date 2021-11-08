# frozen_string_literal: true

require 'faker'

FactoryBot.define do
  factory :plant, class: 'Plant' do
    name { Faker::String.random(length: [0, 6]) }
    exposure { Faker::String.random(length: [0, 6]) }
    moisture { Faker::String.random(length: [0, 6]) }
    description { Faker::String.random(length: [0, 6]) }
  end
end
