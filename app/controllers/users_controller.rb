class UsersController < ApplicationController
    wrap_parameters format: []

    def create
       user = User.create!(user_params)
       session[:user_id] = user.id
       render json: user, status: :created
    end

    def show
        if params[:id] 
            render json: User.find(params[:id])
        else
            render json: cur_user
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
