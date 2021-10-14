class RandiesController < ApplicationController
  before_action :set_randy, only: [:show, :update, :destroy]

  
  # GET /randies
  def index
    @randies = Randy.all

    render json: @randies
  end

  # GET /randies/1
  def show
    render json: @randy
  end

  # POST /randies
  def create
    @randy = Randy.new(randy_params)

    if @randy.save
      render json: @randy, status: :created, location: @randy
    else
      render json: @randy.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /randies/1
  def update
    if @randy.update(randy_params)
      render json: @randy
    else
      render json: @randy.errors, status: :unprocessable_entity
    end
  end

  # DELETE /randies/1
  def destroy
    @randy.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_randy
      @randy = Randy.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def randy_params
      params.require(:randy).permit(:random_name)
    end
end
