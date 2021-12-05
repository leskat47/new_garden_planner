module Api
  module V1
    class PlantingsController < ApplicationController
      before_action :set_location, :set_planting

      def show
      end

      def create
        @planting = @location.plantings.new(planting_params)
        if @planting.save   
          render json: @planting.to_json(include: ['plant', 'area'])
        else
          render json: @planting.errors
        end
      end

      def edit
      end

      def destroy
        @planting.destroy
        return render json: { notice: 'Planting was successfully removed.' }
      end

      def set_location
        @location = Location.find(params[:location_id])
      end

      def set_planting
        if params[:id]
          @planting = Planting.find(params[:id])
        end
      end

      def planting_params
        params.permit(:date_planted, :description, :plant_id, :location_id)
      end
    end
  end
end
