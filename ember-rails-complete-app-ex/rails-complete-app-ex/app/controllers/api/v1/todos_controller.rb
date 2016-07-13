class Api::V1::TodosController < ApplicationController
  before_action :set_api_v1_todo, only: [:show, :edit, :update, :destroy]
	before_action :doorkeeper_authorize!

	# GET /api/v1/todos
  def index
		@api_v1_todos = Todo.all
		render json: @api_v1_todos 
  end

  # GET /api/v1/todos/1
  def show
		render json: @api_v1_todo 
  end

  # POST /api/v1/todos 
  def create
		@api_v1_todo = current_resource_owner.todos.build(api_v1_todo_params)
    if @api_v1_todo.save 
			render json: @api_v1_todo 
    else
			render json: { todo: { msg:  "micropost was not salved!" } }, status: 422
    end
  end

  # PATCH/PUT /api/v1/todos/1
  def update
		@api_v1_todo = current_resource_owner.todos.find(params[:id])
    if @api_v1_todo.update(api_v1_todo_params)
			render json: @api_v1_todo	
		else
			render json: { todo: { msg:  "micropost was not salved!" } }, status: 422
    end
  end

  # DELETE /api/v1/todos/1
  def destroy
		current_resource_owner.todos.find(params[:id]).destroy
		head:no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_v1_todo
      @api_v1_todo = Todo.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def api_v1_todo_params
			params.require(:todo).permit(:title,:user_id)
    end
end