require 'jwt'

module AuthToken
  #Generates auth_token with 48 hr life
  def AuthToken.issue_token(payload)
    payload['exp'] = 48.hours.from_now.to_i
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  #Checks if auth_token is valid
  def AuthToken.valid?(token)
    #Attempts to validate the token,
    #throws an exception which is rescued if it fails
    JWT.decode(token, Rails.application.secrets.secret_key_base)
  rescue
    false
  end
end
