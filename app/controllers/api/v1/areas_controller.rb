# frozen_string_literal: true

module Api
  module V1
    class AreasController < ApplicationController
      # GET /areas
      # GET /areas.json
      def index
        @areas = Area.all.order(name: :asc)
        render json: @areas
      end
    end
  end
end
