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
	this.post('/oauth/token', () => {
		return  {"access_token":
			"43de36e1a9266aea606265b524b82578963b9b9efdbef7e2ed003a6bb7185a4b",
			"token_type":"bearer",
			"expires_in":7200,
			"created_at":1466035645,
			"user":{"id":0,"email":"user0@gmail.com",
				"name":"User 0",
				"username": "user0"}
		};
	});
	this.passthrough('/write-coverage');
	this.namespace = 'api/v1';
	this.get('/users');
	this.get('/users/:user_username', (schema, request) => {
		return schema.users.where({ 
			username: request.params.user_username
		}).models[0];
	});
	this.post('/users');
	this.get('/todos', { coalesce: true });
	this.get('/todos/:todo_url', (schema, request) => {
		debugger;
		 return schema.todos.where({ 
			todo_url: request.params.todo_url
		}).models[0];
	});
	this.post('/todos');
	this.del('/todos/:id');
	this.patch('/todos/:id');
}
