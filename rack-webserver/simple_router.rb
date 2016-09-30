require 'byebug'

module SimpleRouter
	FILE_PATH = File.expand_path("./")
	def self.fetch(path)
		html = "<h1>Fail</h1>"
		path.sub!('/', '')
		if File.file?("#{FILE_PATH}/#{path}.html")
			html = File.read("#{FILE_PATH}/#{path}.html")
		else
			html = File.read("#{FILE_PATH}/404.html")
		end
		['200', {'Content-Type' => 'text/html'}, [html]]
	end
end
