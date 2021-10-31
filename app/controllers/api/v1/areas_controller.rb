class Api::V1::AreasController < ApplicationController

  # GET /areas
  # GET /areas.json
  def index
    @areas = Area.all.order(name: :asc)
    render json: @areas
  end
  
end