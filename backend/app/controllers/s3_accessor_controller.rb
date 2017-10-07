class S3AccessorController < ApplicationController
  require 'aws-sdk'

  @client = Aws::S3::Client.new(
    region: ENV['AWS_REGION']
  )

  def get_url

  end

  def upload_video
  end
end
