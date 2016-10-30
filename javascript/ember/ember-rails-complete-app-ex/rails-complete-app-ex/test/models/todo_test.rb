require "test_helper"

class TodoTest < ActiveSupport::TestCase
  def todo
    @todo ||= Todo.new
  end

  def test_valid
    assert todo.valid?
  end
end
