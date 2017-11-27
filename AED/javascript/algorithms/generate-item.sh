#!bin/bash
# <file-name> <function-name>

if [[ -z "$1" || -z "$2" ]]; then
  echo "you need to pass two arguments"
  exit 0
fi

echo -e "let $2 = require('../$1'); \
\n\nQunit.test('$1', function(assert){ \
\n\tassert.equal($2, ); \
\n});" > "./test/$1-test.js"

echo -e "module.exports = function() { \
\n\n}" > "./$1.js"
