class PostController < ApplicationController

  skip_before_action :verify_authenticity_token, :if => lambda{ request.headers["ACCEPT"] == "application/json" }
  respond_to :json

  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @post }
    end
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :description, :longitude, :latitude, :num_in_series, :content_type, :url)
  end
end
