require 'rubygems'
require './todo'
require 'fileutils'

RSpec.configure do |c|
  c.expect_with(:rspec) do |e|
    e.syntax = :expect
  end

  c.mock_with(:rspec) do |m|
    m.syntax = :expect
  end
end
