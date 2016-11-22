import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
	serverTokenEndpoint: 'http://0.0.0.0:3000/oauth/token'
});
