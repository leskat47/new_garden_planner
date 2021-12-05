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
        expect(body['date_planted']).to eq('2021-01-01')
        expect(body['location_id']).to eq(location.id)
        expect(body['area']['id']).to eq(area.id)
      end
    end
    it "adds a new planting" do
      original_count = Planting.count
      new_plant = {:date_planted => '01-01-2021', :description => 'text', :plant_id => plant.id}
      post api_v1_location_plantings_path(location.id), params: new_plant
     
      new_count = Planting.count

      aggregate_failures do
        expect(new_count).to equal(original_count + 1)
      end
    end
  end
  # DELETE /api/v1/locations/:location_id/plantings/:id
  describe "DELETE planting" do 
    it "deletes a planting" do
      planting = FactoryBot.create(:planting, location: location, plant: plant)     
      planting_id = planting.id
      delete api_v1_location_planting_path(location.id, planting_id)
      body = JSON.parse(response.body)

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(body["notice"]).to eq('Planting was successfully removed.')
        expect(Plant.where(id: planting_id).exists?).to equal(false)
      end  

    end

  end
end
