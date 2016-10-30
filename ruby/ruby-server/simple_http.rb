require 'net/http'

# get by url
#puts Net::HTTP.get('www.google.com.br', '/index.html')

# get by uri
puts Net::HTTP.get(URI('http://www.google.com.br/index.html'))
