# frozen_string_literal: true

module Api
  module V1
    class PlantsController < ApplicationController
      before_action :set_plant, only: %i[show edit update destroy]

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
        
      end

      # GET /plants/1/edit
      def edit; end

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
      def update; end

      # DELETE /plants/1
      # DELETE /plants/1.json
      def destroy
        begin
          @plant.destroy
          return render json: { notice: 'Plant was successfully removed.' }
        rescue
          render json: {error: 'This plant is in use and cannot be deleted.'}
        end
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_plant
        @plant = Plant.find(params[:id])
      end

      def plant_params
        params.permit(:name, :exposure, :moisture, :description)
      end
    end
  end
end
