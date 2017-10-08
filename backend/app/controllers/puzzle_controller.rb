class PuzzleController < ApplicationController

skip_before_action :verify_authenticity_token, :if => lambda{ request.headers["ACCEPT"] == "application/json" }
respond_to :json

  def index
    @puzzles = Puzzle.near(params[:search], 10)
    render json: @puzzles
  end

  def show
    @puzzle = Puzzle.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @puzzle }
    end
  end

  def create
    @puzzle = Puzzle.new(puzzle_params)

    if @puzzle.save
      render json: @puzzle
    else
      render json: @puzzle.errors, status: :unprocessable_entity
    end
  end

  private
  def puzzle_params
    params.require(:puzzle).permit(:title, :description, :longitude, :latitude, :length, :contained_posts)
  end
end
