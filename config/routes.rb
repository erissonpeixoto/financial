Rails.application.routes.draw do
  resource :session
  resources :passwords, param: :token
  resource :registration, only: [ :new, :create ]

  get "up" => "rails/health#show", as: :rails_health_check
  # get "*path", to: "home#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  root "home#index"
end
