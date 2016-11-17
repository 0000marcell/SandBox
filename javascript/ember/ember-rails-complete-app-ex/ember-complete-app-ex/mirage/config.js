import Mirage from 'ember-cli-mirage';

export default function() {
  // These comments are here to help you get started. Feel free to delete them.
  /*
    Config (with defaults).
    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  /*
    Shorthand cheatsheet:
    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
    http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */
	this.passthrough('/write-coverage');
	this.passthrough('http://pousada-serra-back-end.herokuapp.com/api/images');
	this.post('/oauth/token', (schema, request) => {
		let requestBody = request.requestBody,
				email;
		if(/username=/.test(requestBody)){
			email = 
			decodeURIComponent(requestBody
				.split('username=')[1].split('&')[0]);
		}else{
			return;	
		}
		let user = schema.users.where({ 
			email: email
		}).models[0];
		if(user){
			return  {"access_token":
				"43de36e1a9266aea606265b524b82578963b9b9efdbef7e2ed003a6bb7185a4b",
				"token_type":"bearer",
				"expires_in": 7200,
				"created_at": 1466035645,
				"user": user};
		}else{
			return new Mirage.Response(422, 
				{type: 'header'}, 
				{errors: {title: ['Wrong email/password combination']}});
		}
	});
	this.namespace = 'api/v1';
	this.post('/users');
	this.get('/users');
	this.get('/users/:user_username', (schema, request) => {
		return schema.users.where({ 
			username: request.params.user_username
		}).models[0];
	});
	this.patch('/users/:id');
	this.get('/todos', (schema, request) => {
		let todos,
				pag = parseInt(request.queryParams['page[number]']),
				modelsLength = schema.todos.all().models.length,
				size = parseInt(request.queryParams['page[size]']);
		if(request.queryParams.search){
			let search = request.queryParams.search;
			todos = schema.todos.where((todo) => {
				return todo.title.match(new RegExp(search));
			});
		}else{
			let sliceF = (pag - 1) * size,
					sliceL = sliceF + size; 
			todos = schema.todos.where((todo) => {
				return (todo.id >= sliceF && todo.id <= sliceL);
			});
		}
		let json = this.serializerOrRegistry.serialize(todos);
		json.meta = { pagination : { 
				last: { number: modelsLength/size}, self: { number: pag }
			}
		};
		console.log('meta: ', json);
		return json;
	});
	this.get('/todos/:todo_url', (schema, request) => {
		return schema.todos.where({ 
			todo_url: request.params.todo_url
		}).models[0];
	});
	this.post('/todos');
	this.del('/todos/:id');
	this.patch('/todos/:id');
}
