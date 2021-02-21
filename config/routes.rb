Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  get 'upload', to: 'images#new'
  resources :images, only:   [:index, :show, :create]
  get '/@:username', to: 'users#show', as: :profile
  delete '/images/:id', to: 'images#destroy'
end
