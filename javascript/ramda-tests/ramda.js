let R = require('ramda');

const permissions = {
  'group1-perm1': true,
  'group1-perm2': false,
  'group2-perm1': false,
  'group2-perm2': true,
  'perm3': true,
  'perm4': false
};

const fn = R.compose(R.toPairs);

console.log(fn(permissions));
