let R = require('ramda');

const permissions = {
  'group1-perm1': true,
  'group1-perm2': false,
  'group2-perm1': false,
  'group2-perm2': true,
  'perm3': true,
  'perm4': false
};

let result = R.chain(R.append, R.head)([1, 2, 3]);
console.log('result: ', result);
