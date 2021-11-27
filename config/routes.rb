# frozen_string_literal: true

Rails.application.routes.draw do
  resources :flower_characteristics

  namespace :api do
    namespace :v1 do
      resources :areas, only: [:index]
      resources :plants , only: [:index, :create, :destroy]

      resources :locations do
        resources :plantings, only: [:create]
      end
    end
  end

  root 'plants#index'
  get '*path', to: 'plants#index'
end
