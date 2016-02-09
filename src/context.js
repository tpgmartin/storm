var Assertion = require('../src/assertion');

function Context (name, callback) {
  this.name = name;
  this.callback = callback;
}

Context.prototype.asserts = function (name, result) {
  var assertion = new Assertion(this.name, result, name);
  return assertion;
}

module.exports = Context;