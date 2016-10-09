class TableDefinition
	def evaluate(&block)
		# now we can use self inside the block and 
		# it will refer to the context where the block 
		# was defined!
		@self_before = eval "self", block.binding
		instance_eval &block
	end

	def method_missing(method, *args, &block)
		@self_before.send method, *args, &block
	end
end
