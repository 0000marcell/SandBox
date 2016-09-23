x = 2
y = 2
puts x.equal? y # true

x = 2
y = 3
puts x.equal? y # false

class Something
end

class Anotherthing
end

x = Something.new
y = Anotherthing.new

puts x.equal? y # false

x = Something.new
y = Something.new

puts x.equal? y  # false

x = y
puts x.equal? y # true

x = "marcell"
y = "marcell"

puts x.equal? y # false
