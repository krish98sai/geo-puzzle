class PuzzleController < ApplicationController
  def index
    @puzzles = Puzzle.all
  end

  def show
    @puzzle = Puzzle.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @article }
    end
  end
end
