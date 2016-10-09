def some_block
	words = ['marcell', 'monteiro', 'cruz']
	begin
		words.each do |value|
			yield value
		end
	ensure
		puts "end it"
	end
end

some_block do |value|
	puts value
	break
end
