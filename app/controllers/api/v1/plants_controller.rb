class Api::V1::PlantsController < ApplicationController
	before_action :set_plant, only: [:show, :edit, :update, :destroy]

  # GET /plants
  # GET /plants.json
  def index
    @plants = Plant.all.order(name: :asc)
    render json: @plants
  end

  # GET /plants/1
  # GET /plants/1.json
  def show
    if @plant
      render json: @plant
    else
      render json: @plant.errors
    end
  end

  # GET /plants/new
  def new
    @plant = Plant.new
  end

  # GET /plants/1/edit
  def edit
  end


  # POST /plants
  # POST /plants.json
  def create
    @plant = Plant.new(plant_params)


    if @plant.save
      render json: @plant
    else
      render json: @plant.errors
    end
  end

  # PATCH/PUT /plants/1
  # PATCH/PUT /plants/1.json
  def update
  end

  # DELETE /plants/1
  # DELETE /plants/1.json
  def destroy
    @plant.destroy

    render json: { notice: 'plant was successfully removed.' }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_plant
      @plant = Plant.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def plant_params
      params.permit(:name, :exposure, :moisture, :description)
    end
end
