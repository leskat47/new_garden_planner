module Api
  module V1
    class PlantingsController < ApplicationController
      before_action :set_location

      def show
      end

      def create
        @planting = @location.plantings.new(planting_params)

        if @planting.save
          render json: @plant
        else
          render json: @plant.errors
        end
      end

      def edit
      end

      def destroy
      end

      def set_location
        @location = Location.find(params[:location_id])
      end

      def planting_params
        params.permit(:date_planted, :description, :plant_id)
      end
    end
  end
end
