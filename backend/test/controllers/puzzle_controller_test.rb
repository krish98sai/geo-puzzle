require 'test_helper'

class PuzzleControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get puzzle_index_url
    assert_response :success
  end

  test "should get show" do
    get puzzle_show_url
    assert_response :success
  end

end
