# frozen_string_literal: true

json.array! @plants, partial: 'plants/plant', as: :plant
