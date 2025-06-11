class CategoriesController < ApplicationController
  before_action :set_category, only: %i[show update destroy]

  def index
    @categories = Category.where(user_id: current_user.id)
    render json: @categories
  end

  def show
    render json: @category
  end

  def create
    @category = Category.new(category_params.merge(user_id: current_user.id))
    if @category.save
      render json: @category, status: :created
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def update
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @category.destroy
    head :no_content
  end

  private

  def set_category
    @category = Category.find_by(id: params[:id], user_id: current_user.id)
    head :not_found unless @category
  end

  def category_params
    params.require(:category).permit(:name)
  end
end
