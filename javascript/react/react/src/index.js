var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('src'));
app.use(express.static('build'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/pages/home/home.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

