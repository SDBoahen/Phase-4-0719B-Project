class WooblySnacksController < ApplicationController


    # GET /woobly_snacks
    def index
        all_the_woobly_snacks = WooblySnack.all
        render json: all_the_woobly_snacks
    end


    # POST /woobly_snacks
    def create
        
        created_woobly_snack = WooblySnack.create(create_woobly_snack_params)
        
            byebug

        render json: created_woobly_snack

    end 




    private


    def create_woobly_snack_params

        params.permit(:likes_snack, :favorite_snack, 
        
        :woobly_id,
        :snack_id
        
        )
    end




####  THE END
end
