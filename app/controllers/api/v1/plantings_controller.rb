module Api
  module V1
    class PlantingsController < ApplicationController
      before_action :set_location

      def show
      end

      def create
        @planting = @location.plantings.new(planting_params)
<<<<<<< HEAD
        if @planting.save   
          render json: {
            planting: @planting,
            location_id: @location.id,
            area_id: @location.area_id
          }
=======

        if @planting.save
          render json: @planting
>>>>>>> 8c18bc5 (Set up plantings modal and request to add planting.)
        else
          render json: @planting.errors
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
