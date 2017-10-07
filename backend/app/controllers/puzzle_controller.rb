class PuzzleController < ApplicationController
  def index
    @puzzle = Puzzle.all
  end

  def show
    @puzzle = Puzzle.find(params[:id])
    respond_to do |f|
      f.html
      f.json { render json: @puzzle }
    end
  end
end
