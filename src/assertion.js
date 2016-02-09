function Assertion (name, expectedValue, contextName) {
  this.name = name;
  this.expectedValue = expectedValue;
  this.contextName   = contextName;
}

module.exports = Assertion;