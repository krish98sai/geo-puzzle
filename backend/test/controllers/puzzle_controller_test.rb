require 'test_helper'

class PuzzleControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get puzzle_new_url
    assert_response :success
  end

  test "should get create" do
    get puzzle_create_url
    assert_response :success
  end

end
