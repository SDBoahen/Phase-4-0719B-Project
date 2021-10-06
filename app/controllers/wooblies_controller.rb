class WoobliesController < ApplicationController
  before_action :set_woobly, only: [:show, :update, :destroy]

  # GET /wooblies
  def index
    @wooblies = Woobly.all

    render json: @wooblies

    # render json: Woobly.all
  end

  # GET /wooblies/1
  def show
    render json: @woobly
  end

  # POST /wooblies
  def create
    @woobly = Woobly.new(woobly_params)

    if @woobly.save
      render json: @woobly, status: :created, location: @woobly
    else
      render json: @woobly.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /wooblies/1
  def update
    if @woobly.update(woobly_params)
      render json: @woobly
    else
      render json: @woobly.errors, status: :unprocessable_entity
    end
  end

  # DELETE /wooblies/1
  def destroy
    @woobly.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_woobly
      @woobly = Woobly.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def woobly_params
      params.require(:woobly).permit(:name)
    end
end
