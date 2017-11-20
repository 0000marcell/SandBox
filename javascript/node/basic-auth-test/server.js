var connect = require('connect');
var auth = require('basic-auth');

function basicAuth(req, res){
  var credentials = auth(req)
  if(credentials){
    console.log('credentials: %s password: %s', credentials.name, credentials.pass);
  }
  if (!credentials || credentials.name !== 'john' || 
    credentials.pass !== 'secret') {
    res.statusCode = 401
    res.setHeader('WWW-Authenticate', 'Basic realm="example"')
    res.end('Access denied')
  } else {
    res.end('Access granted')
  }
}

var app = connect()
          .use(basicAuth);
app.listen(3000);



