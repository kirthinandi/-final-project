class ProductsController < ApplicationController

    def index
        render json: Product.all.includes(:reviews), include: 'reviews'
    end

    def show
        product = Product.find(params[:id])
        render json: product, include: 'reviews'
    end
end
