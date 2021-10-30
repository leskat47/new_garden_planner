Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'plants/index'
      post 'plants/create'
      delete 'plants/:id', to: 'plants#destroy'
    end
  end

  root 'plants#index'
  get '*path', to: 'plants#index'
end
