var should = require('chai').should();
var Assertion = require('../src/assertion');

describe('Assertion', function () {
  describe('creating a new assertion instance', function () {
    it('should return new assertion with name, expected value, and context', function () {
        var input_name = 'input_name';
        var input_expected_value = true;
        var input_context = 'input_context';
        
        var output = new Assertion (input_name, input_expected_value, input_context);
        
        output.name.should.be.a('string');
        output.name.should.equal('input_name');
        output.expectedValue.should.a('boolean');
        output.expectedValue.should.equal(true);
        output.contextName.should.equal('input_context');
    });  
  });
});
