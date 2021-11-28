require 'rails_helper'

RSpec.describe "Areas", type: :request do
  let!(:area) { FactoryBot.create(:area) }
  let!(:location) { FactoryBot.create(:location, area: area) }
  let!(:plant) { FactoryBot.create(:plant) }
  let!(:planting) { FactoryBot.create(:planting, location: location, plant: plant) }

  describe 'get areas' do
    it 'gets all areas' do
      get '/api/v1/areas'
      body = JSON.parse(response.body)[0]
      location = body['locations'][0]
      planting = location['plantings'][0]

      aggregate_failures do
        expect(response).to have_http_status(:ok)
        expect(body['name']).to eq(area.name)
        expect(body['description']).to eq(area.description)
        expect(location['name']).to eq(location['name'])
        expect(planting['date_planted']).to eq(planting['date_planted'])
        expect(planting['plant']['name']).to eq(planting['plant']['name'])
      end
    end 
  end
end
