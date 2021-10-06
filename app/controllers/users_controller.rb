class UsersController < ApplicationController


    # GET /users
    def index 
        render json: User.all
    end


    # POST /signup 
    def create
        new_user = User.new(user_new_params)
        # new_user = User.create(user_new_params)

        if new_user.save
            render json: new_user
        else
            render json: { errors: new_user.errors.full_messages }
        end
            
    end 


    # PATCH /users/:id 
    def update
        edited_user = User.find_by_id( params[:id] )

        if edited_user.update(user_edit_params)
            render json: edited_user
        else
            render json: { errors: edited_user.errors.full_messages }
        end
        
    end
    

    # DELETE /users/:id 
    def destroy
        # byebug
        user_who_is_ungrateful_and_wants_to_delete_their_account = User.find_by_id( params[:id] )

        session.delete(:user_id)
        user_who_is_ungrateful_and_wants_to_delete_their_account.destroy

        render json: { session_user: session[:user_id] }
    end


    private

    def user_new_params
        params.permit(:username, :password)
    end

    def user_edit_params
        params.permit(:username)
    end


######## DON'T TOUCH
end
