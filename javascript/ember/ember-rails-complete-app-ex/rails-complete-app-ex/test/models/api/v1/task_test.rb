require "test_helper"

class Api::V1::TaskTest < ActiveSupport::TestCase
  def task
    @task ||= Api::V1::Task.new
  end

  def test_valid
    assert task.valid?
  end
end
