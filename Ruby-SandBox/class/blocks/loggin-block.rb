def with_logging(description) 
	begin
		puts "starting load!"
		yield
	rescue
		puts "failed!"
	end
end

with_logging('load') do
	puts "loading"
end
