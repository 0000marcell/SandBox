require 'yaml'
obj = { parent: 'marcell' }
value = 'child'
obj[:parent] = { value =>  ""}
puts obj.to_yaml
