require 'rails_helper'

RSpec.describe Api::V1::PlantsController do
  describe 'DELETE plant' do
    let!(:area) { FactoryBot.create(:area) }
    let!(:location) { FactoryBot.create(:location, area: area) }
    let!(:plant) { FactoryBot.create(:plant) }
    let!(:unused_plant) { FactoryBot.create(:plant) }
    let!(:planting) { FactoryBot.create(:planting, location: location, plant: plant) }

    it 'deletes an unused plant' do
      delete :destroy, params: { id: unused_plant.id }
      body = JSON.parse(response.body)

      aggregate_failures do
        expect(response).to have_http_status(:ok)
        expect(body['notice']).to eq('Plant was successfully removed.')
        expect(Plant.count).to eq(1)
      end
    end

    it 'does not delete a used plant' do
      delete :destroy, params: { id: plant.id }
      body = JSON.parse(response.body)
      
      aggregate_failures do
        expect(response).to have_http_status(:ok)
        expect(body['error']).to eq('This plant is in use and cannot be deleted.')
        expect(Plant.count).to eq(2)
      end
    end
  end
end
