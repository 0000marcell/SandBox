def do_something_with_an_arg
	yield("hello world") if block_given?
end

do_something_with_an_arg do |message|
	puts "the message is #{message}"
end
