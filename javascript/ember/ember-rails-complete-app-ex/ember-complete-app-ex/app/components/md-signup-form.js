import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const blankMsg = "{description} can't be blank!";
const invalidEmail = 'insert a valid email';

var Validations = buildValidations({
	"model.name": {
		debounce: 500,
		validators:	[
			validator('presence', {
				presence: true,
				description: 'name',
				message: blankMsg 			
			})
		]
	},
	"model.email": {
		debounce: 500,
		validators:	[
			validator('presence', {
				presence: true,
				description: 'email',
				message: blankMsg 			
			}),
			validator('format', {
				type: 'email',
				message: invalidEmail 			
			})
		]
	},
	"model.password": {
		debounce: 500,
		validators:	[
			validator('presence', {
				presence: true,
				description: 'password',
				message: blankMsg 			
			}),
			validator('length', {
				message: 'password must be at least 4 characters long',
				min: 4
			})
		]
	},
	"model.passwordConfirmation": {
		debounce: 500,
		validators:	[
			validator('presence', {
				presence: true,
				description: 'password confirmation',
				message: blankMsg 			
			}),
			validator('confirmation', {
				on: "model.password",
				message: 'passwords do not match!'	
			})		
		]
	}
});


export default Ember.Component.extend(Validations,{
	classNames: ['md-signup-form'],
	init(){
		this._super(...arguments);
		this.set('msgs', []);
		this.set('errors', []);
		this.set('activateValidations', false);
	},
	showErrors:  Ember.computed('validations.messages', 
			'activateValidations', 'errors', function(){
		if((!this.get('validations').get('isValid') || this.get('errors.length')) &&
			this.get('activateValidations')){
			return true;
		}else{
			return false;
		}		
	}),
	validateForm(){
		return new Ember.RSVP.Promise((resolve, reject) => {
			this.validate().then(({ m, validations  }) => {
				if(validations.get('isValid')){
					resolve();	
				}else{ reject(); }
			});		
		});
	},
	actions: {
		signup(){
			this.set('activateValidations', true);
			this.validateForm().then(() => {
				this.get('signup')(this.get('model'), this);
			});		
		}
	}
});
