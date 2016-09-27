def block_return
	value = yield 
	puts "#{value}"
end

block_return do
	value = "marcell"
	name = "monteiro"
	2 / 4.0
end
