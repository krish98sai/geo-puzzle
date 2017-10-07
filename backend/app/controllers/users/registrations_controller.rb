class Users::RegistrationsController < Devise::RegistrationsController
  #Skips CSRF protection if JSON request, protects if web request
  skip_before_action :verify_authenticity_token, :if => lambda{ request.headers["ACCEPT"] == "application/json" }
  respond_to :html, :json

  def create
     # Render JSON for Android request
     if request.headers["ACCEPT"] == "application/json"
       build_resource(sign_up_params)

       resource.save
       yield resource if block_given?
       if resource.persisted?
         if resource.active_for_authentication?
           # User may or may not have confirmed registration in email, but still
           # has time to do so.
           sign_up(resource_name, resource)
           respond_with resource, location: after_sign_up_path_for(resource) do |format|
             format.json { render json: { status: "created" } }
           end
         else
           # User has not confimed in email and confirmation has expired
           expire_data_after_sign_in!
           respond_with resource, location: after_inactive_sign_up_path_for(resource) do |format|
             format.json { render json: { status: "confirmation expired" } }
           end
         end
       else
         # Account registrations did not work...
         respond_with resource, location: after_inactive_sign_up_path_for(resource) do |format|
           format.json { render json: { status: "error creating account" } }
         end
       end
     else
       super
     end
   end
end
