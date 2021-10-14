class WoobliesController < ApplicationController
  # before_action :set_woobly, only: [:show, :update, :destroy]


  # GET /wooblies
  def index
    @wooblies = Woobly.all

    render json: @wooblies

    # render json: Woobly.all
  end


  # GET /wooblies/:id
  def show
    found_woobly = Woobly.find_by(id: params[:id])

    render json: found_woobly
  end


  # POST /wooblies
  def create

  end


  # PATCH/PUT /wooblies/:id
  def update
 
    woobly_to_update = Woobly.find_by(id: params[:id])

    if woobly_to_update
      # Did we even find a Woobly? :-/


      if woobly_to_update.update(update_woobly_params)
          #   params_id_variable = params[:id]
          # if woobly_to_update.update_favorite_snack(
          #       update_woobly_params, 
          #       params_id_variable
          #     )


          #  .valid?  is redundant here
          # woobly_to_update.valid?
          # woobly_to_update.update()
          ##  cause we're going to have to call .update again anyways 

        render json: woobly_to_update


      else # We Were NOT Able to Update


        byebug

        if woobly_to_update.errors
          render json: { error: woobly_to_update.errors.full_messages }
        else
          byebug
          render json: { error: "Something Went Wrong :(" }
          # A possible error would be a  :favorite_snack  that does not correspond with the snacks in the database 
        end


      end
    

    else
      byebug
      # logic for Woobly not being found
      render json: { error: "Sorry, Woobly NOT Found :(" }

    end

    # render json: { message: "We're Still Working On This Controller Action (update)"}

  end


  # DELETE /wooblies/1
  def destroy
  end




  private
    # Use callbacks to share common setup or constraints between actions.
    
    # Only allow a list of trusted parameters through.
    def create_woobly_params
    end


    def update_woobly_params
        params.permit(:favorite_snack)
    end





####  END
end








  # def set_woobly
  #   @woobly = Woobly.find(params[:id])
  # end
