require 'rack'
require_relative 'simple_router'

app = Proc.new do |env|
	puts "REQUEST_METHOD: #{env['REQUEST_METHOD']}"
	puts "SCRIPT_NAME: #{env['SCRIPT_NAME']}"
	puts "PATH_INFO: #{env['PATH_INFO']}"
	puts "QUERY_STRING: #{env['QUERY_STRING']}"
	puts "SERVER_NAME: #{env['SERVER_NAME']}"
	puts "SERVER_PORT: #{env['SERVER_PORT']}"
	puts "HTTP_Variables: #{env['HTTP_Variables']}"
	SimpleRouter.fetch(env['PATH_INFO'])
end

Rack::Handler::WEBrick.run app
