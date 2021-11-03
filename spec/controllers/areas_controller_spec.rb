require 'rails_helper'

RSpec.describe Api::V1::AreasController do
  describe 'GET index' do
    let!(:area) { FactoryBot.create(:area) }

    it 'gets all areas' do
      get 'index'

      aggregate_failures do
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)[0]["name"]).to eq(area.name)
        expect(JSON.parse(response.body)[0]["description"]).to eq(area.description)
      end
    end

  end
end