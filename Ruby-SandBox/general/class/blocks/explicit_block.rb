def run_that_block( &that_block )
	puts "About to run the block"
	that_block.call if that_block # verify if its nil
	puts "Done running the block"
end

run_that_block do 
	puts "Running that block"
end
