Rails.application.routes.draw do
  
  resources :users, only: [:index, :destroy, :update]


    post "/signup", to: "users#create"
    #  signing-up = Creating a New User

    
    post "/login", to: "sessions#create"
    #  logging-in = Creating a New Session - For an Existing User

    delete "/logout", to: "sessions#destroy"
    #  logging-out = Clearinf Session - For an All Users



  resources :snacks
  resources :wooblies
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
