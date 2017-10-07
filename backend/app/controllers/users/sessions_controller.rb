class Users::SessionsController < Devise::SessionsController
  require 'auth_token'
  #Skips CSRF protection if JSON request, protects if web request
  skip_before_action :verify_authenticity_token, :if => lambda{ request.headers["ACCEPT"] == "application/json" }
  respond_to :html, :json

  #Adapted to support login and auth_token distribution over JSON
  def create
    #Checks to see if request is coming from JSON
    if request.headers["ACCEPT"] == "application/json"
      self.resource = warden.authenticate!(auth_options)
      set_flash_message(:notice, :signed_in) if is_flashing_format?
      sign_in(resource_name, resource)
      yield resource if block_given?

      # Generate auth_token and render JSON after authenticating
      token = AuthToken.issue_token({ user: resource.id })
      respond_with resource, location: after_sign_in_path_for(resource) do |format|
        format.json { render json: { user: resource.email, token: token } }
      end
    else
      super
    end
  end
end
