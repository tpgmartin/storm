function Assertion (name, expectedValue, contextName) {
  this.name = name;
  this.expectedValue = expectedValue;
  this.contextName   = contextName;
}

// Should be able to handle excpetions when checking assertions
// Add some logging

Assertion.prototype.isTrue = function () {
  return this.expectedValue === true;
}

Assertion.prototype.isFalse = function () {
  return this.expectedValue === false;
}

Assertion.prototype.isNull = function () {
  return this.expectedValue === null;
}

module.exports = Assertion;