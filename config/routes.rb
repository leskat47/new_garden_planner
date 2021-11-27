# frozen_string_literal: true

Rails.application.routes.draw do
  resources :flower_characteristics

  resources :areas
  namespace :api do
    namespace :v1 do
      resources :plants , only: [:index, :create, :destroy]

      resources :locations do
        resources :plantings, only: [:create] # Add others once completed in controller
      end
    end
  end

  root 'plants#index'
  get '*path', to: 'plants#index'
end
