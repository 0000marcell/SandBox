# @class_name			-- ex: Api::Todos
# @resource_s			-- ex: api_todo 
# @resources			-- ex: @api_todos 
# @resource				-- ex: @api_todo 
# @db							-- ex: Api::Todo 
# @resource_key		-- ex: :todo 
# @resource_args	-- ex: :title, :isCompleted 

# Controller
class Api::Todos < ApplicationController
	protect_from_forgery :except => :create
  before_action :set_api_todo, only: [:show, :edit, :update, :destroy]

	# GET /controller/
  def index
    @api_todos = Api::Todo.all
		render json: @api_todos 
  end

  # GET /controller/1
  def show
		render json: @api_todo
  end

  # GET /controller/new
  def new
    @api_todo = Api::Todo.new
  end

  # GET /controller/1/edit
  def edit
  end

  # POST /controller/
  def create
    @api_todo = Api::Todo.new(api_todo_params)
    if @api_todo.save
			render json: @api_todo
    else
			render json: @api_todo, status: :created, location: @api_todo
    end
  end

  # PATCH/PUT /api/todos/1
  def update
		@api_todo = Api::Todo.find(params[:id])
    if @api_todo.update(api_todo_params)
			head :no_content
    else
			render json: @api_todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/todos/1
  def destroy
    @api_todo.destroy
		head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_todo
      @api_todo = Api::Todo.find(params[:id])
    end

    # Only allow a trusted parameter white list through.
    def api_todo_params
      params.require(:todo).permit(:title,:isCompleted)
    end
end
