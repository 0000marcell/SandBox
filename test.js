'use strict';

let payload = {
    'data': {
      'attributes': {
        'does-mirage': true,
        'name': 'Sam'
      },
      'relationships': {
        'company': {
          'data': {
            'id': '1',
            'type': 'companies'
          }
        },
        'github-account': {
          'data': {
            'id': '1',
            'type': 'github-accounts'
          }
        },
        'something': {
          'data': null
        },
        'many-things': {
          'data': []
        }
      },
      'type': 'github-account'
    }
  };

Object.keys(payload.data.attributes).forEach((key) => {
	 console.log('key', key);
});
/*
let attrs = Object.keys(payload.data.attributes).reduce((sum, key) => {
	sum[key] = payload.data.attributes[key];
	return sum;
});
*/
//console.log(attrs);
