var should = require('chai').should();
var Context = require('../src/context');
var Assertion = require('../src/assertion');

// Add before each

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
  describe('checking an assertion', function () {
    it('should return "true" for a correct "isTrue" assertion', function () {
        var input_assertion = new Assertion ('my_assertion', true);
        
        var output = input_assertion.isTrue();
        
        output.should.be.a('boolean');
        output.should.equal(true);
    });
    
    it('should return "false" for an incorrect "isTrue" assertion', function () {
        var input_assertion = new Assertion ('my_assertion', false);
      
        var output = input_assertion.isTrue();
        
        output.should.be.a('boolean');
        output.should.equal(false);
    });
    
    it('should return "true" for a correct "isFalse" assertion', function () {
        var input_assertion = new Assertion ('my_assertion', false);
        
        var output = input_assertion.isFalse();
        
        output.should.be.a('boolean');
        output.should.equal(true);
    });
    
    it('should return "true" for a correct "isNull" assertion', function () {
        var input_assertion = new Assertion ('my_assertion', null);
        
        var output = input_assertion.isNull();
        
        output.should.be.a('boolean');
        output.should.equal(true);
    });
    
    it('should fail silently if not called with assetion method', function () {
        var input_assertion = new Assertion ('my_assertion', true);
        
        var output = input_assertion;
        
        output.should.be.an('object');
    });
    
  });
});
