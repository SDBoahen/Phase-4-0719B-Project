class SessionsController < ApplicationController


    # Logging In  >>>>
    # POST /login
    def create 
        # byebug
        user_to_login = User.find_by_username( params[:username])

        if user_to_login
            # ANY ADDITIONAL AUTHENTICATION

                session[:user_id] = user_to_login.id
                # Us: Putting someone into Sessions (the SessionHash) via their  user_id

            render json: user_to_login
        else
            render json: { error: "Could Not Authenticate! Sorry! Try Again!" }
        end
    end


    # <<<<  Logging Out
    # DELETE /login
    def destroy
        session.delete(:user_id)
            # session[:user_id] = nil 
        # byebug

        # head :no_content 
        render json: { session_user: session[:user_id] }
    end


end
