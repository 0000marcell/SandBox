class Api::V1::TasksController < ApplicationController
  before_action :set_api_v1_task, only: [:show, :edit, :update, :destroy]
	before_action :doorkeeper_authorize!

	# GET /api/v1/tasks
  def index
		if params[:page]
			@api_v1_tasks = Task.page(params[:page][:number]).per(params[:page][:size])
		else
			@api_v1_tasks = Task.all
		end
		render json: @api_v1_tasks 
  end

  # GET /api/v1/tasks/1
  def show
		render json: @api_v1_task 
  end

  # POST /api/v1/tasks 
  def create
		@api_v1_task = current_resource_owner.tasks.build(api_v1_task_params)
    if @api_v1_task.save 
			render json: @api_v1_task 
    else
			render json: { task: { msg:  "micropost was not salved!" } }, status: 422
    end
  end

  # PATCH/PUT /api/v1/tasks/1
  def update
	@api_v1_task = current_resource_owner.tasks.find(params[:id])
    if @api_v1_task.update(api_v1_task_params)
			render json: @api_v1_task	
		else
			render json: { task: { msg:  "micropost was not salved!" } }, status: 422
    end
  end

  # DELETE /api/v1/tasks/1
  def destroy
		current_resource_owner.tasks.find(params[:id]).destroy
		head:no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_v1_task
      @api_v1_task = Task.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def api_v1_task_params
			params.require(:task).permit(:title,:user_id)
    end
end
