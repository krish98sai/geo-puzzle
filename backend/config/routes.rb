Rails.application.routes.draw do
  get 'puzzle/new'

  get 'puzzle/create'

  devise_for :users, controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
  }
  get 'home/index'

  root 'home#index'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
