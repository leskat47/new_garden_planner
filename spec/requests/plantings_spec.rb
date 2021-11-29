require 'rails_helper'

RSpec.describe "Plantings", type: :request do
  let!(:area) { FactoryBot.create(:area) }
  let!(:location) { FactoryBot.create(:location, area: area) }
  let!(:plant) { FactoryBot.create(:plant) }

  describe "GET /create" do
    it "returns planting after adding" do
      new_plant = {:date_planted => '01-01-2021', :description => 'text', :plant_id => plant.id}
      post api_v1_location_plantings_path(location.id), params: new_plant
     
      body = JSON.parse(response.body)

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(body['planting']['date_planted']).to eq('2021-01-01')
        expect(body['location_id']).to eq(location.id)
        expect(body['area_id']).to eq(area.id)
      end
    end
  end

end
