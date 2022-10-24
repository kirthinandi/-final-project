class ReviewsController < ApplicationController
    def index
        render json: Review.all, include: [:product, :user]
    end

    def show
        review = Review.find(params[:id])
        render json: review
    end

    def create
        review = cur_user.reviews.create!(review_params)
        render json: review, include: [:product, :user], status: :created
    end
    
    def update 
        review = Review.find(params[:id])
        if review.user == cur_user
            review.update!(update_params)
            render json: review, include: [:product, :user], status: :accepted
        else
            render json: {error: "Not allowed"}
        end
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:product_id, :rating, :changes_in_skin, :duration, :positive, :negative, :repurchase, :image)
    end

end
