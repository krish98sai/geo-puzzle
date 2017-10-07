require 'test_helper'

class S3AccessorControllerTest < ActionDispatch::IntegrationTest
  test "should get get_url" do
    get s3_accessor_get_url_url
    assert_response :success
  end

  test "should get upload_video" do
    get s3_accessor_upload_video_url
    assert_response :success
  end

end
