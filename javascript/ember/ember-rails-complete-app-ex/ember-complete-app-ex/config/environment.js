/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
		modulePrefix: 'app4',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
		'ember-simple-auth': {
			baseURL: '/',
			authenticationRoute: 'home/login'
		},
		'ember-cli-mirage': {
			enabled: false
		},
		APP: {
			useMirage: false,
			host: '/',
			oauth2: '/oauth/token'
    }
  };
	
	if(environment == 'development'){
		ENV.APP.useMirage = true;
		ENV.APP.host = '/';
		ENV.APP.oauth2 = '/oauth/token';
		ENV['ember-cli-mirage'].enabled = true;
		ENV['ember-simple-auth'].baseURL = '/';
		// ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
	}
	
  if (environment === 'test') {
		ENV.APP.useMirage = true;
		ENV.APP.host = '/';
		ENV.APP.oauth2 = '/oauth/token';
		ENV['ember-cli-mirage'].enabled = true;
		ENV['ember-simple-auth'].baseURL = '/';
		// Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
	}

  return ENV;
};
