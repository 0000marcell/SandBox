let prop = ['car', 'bike', 'bus'];

function MirageError() {
  let tmp = Error.apply(this, arguments);

  for (let idx = 0; idx < errorProps.length; idx++) {
    let prop = errorProps[idx];

    if (['description', 'message', 'stack'].indexOf(prop) > -1) {
      this[prop] = `Mirage: ${tmp[prop]}`;
    } else {
      this[prop] = tmp[prop];
    }
  }

  console.error(this.message);
  console.error(this);
}

MirageError.prototype = Object.create(Error.prototype);

MirageError('testing this');



