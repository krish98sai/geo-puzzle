class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  require 'auth_token'

  def verify_jwt_token
    head :unauthorized if request.headers['Authorization'].nil? ||
        !AuthToken.valid?(request.headers['Authorization'].split(' ').last)
  end

end
