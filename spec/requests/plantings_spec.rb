require 'rails_helper'

RSpec.describe "Plantings", type: :request do
  let!(:area) { FactoryBot.create(:area) }
  let!(:location) { FactoryBot.create(:location, area: area) }
  let!(:plant) { FactoryBot.create(:plant) }

  describe "GET /create" do
    it "returns all plantings for a location success" do
      post api_v1_location_plantings_path(location.id), params: {:date_planted => '01-01-2021', :description => 'text', :plant_id => plant.id}
      expect(response).to have_http_status(:success)
    end
  end

end
