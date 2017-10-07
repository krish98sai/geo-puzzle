Rails.application.routes.draw do
  get 's3_accessor/get_url'

  get 's3_accessor/upload_video'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
