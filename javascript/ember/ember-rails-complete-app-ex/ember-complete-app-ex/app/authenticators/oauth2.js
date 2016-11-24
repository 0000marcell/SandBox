import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from 'app4/config/environment';

export default OAuth2PasswordGrant.extend({
	serverTokenEndpoint: ENV.APP.oauth2
});
