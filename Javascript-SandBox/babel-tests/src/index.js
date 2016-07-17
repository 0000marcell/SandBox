import BaseHandler from './base';

let base = new BaseHandler();
let result = base.getModelClassFromPath('users/:id');
console.log(result);
