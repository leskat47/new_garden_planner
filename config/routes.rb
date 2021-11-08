# frozen_string_literal: true

Rails.application.routes.draw do
  resources :flower_characteristics
  resources :plantings
  resources :locations
  resources :areas
  namespace :api do
    namespace :v1 do
      get 'plants/index'
      post 'plants/create'
      delete 'plants/:id', to: 'plants#destroy'

      get 'areas/index'
    end
  end

  root 'plants#index'
  get '*path', to: 'plants#index'
end
