def each_word
	word_array = ["marcell", "monteiro", "cruz"]
	word_array.each { |word| yield(word) }
end

each_word do |value|
	puts value
end
