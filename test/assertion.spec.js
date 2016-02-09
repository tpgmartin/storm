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
    it('should return "true" for a correst "isTrue" assertion', function () {
        var input_context = new Context ('context_name', function cb () {});
        
        var output = input_context.asserts('my_assertion', true).isTrue();
        
        output.should.be.a('boolean');
        output.should.equal(true);
    });
    
    it('should return "false" for an incorrest "isTrue" assertion', function () {
        var input_context = new Context ('context_name', function cb () {});
        
        var output = input_context.asserts('my_assertion', false).isTrue();
        
        output.should.be.a('boolean');
        output.should.equal(false);
    });
    
    it('should return "true" for a correst "isFalse" assertion', function () {
        var input_context = new Context ('context_name', function cb () {});
        
        var output = input_context.asserts('my_assertion', false).isFalse();
        
        output.should.be.a('boolean');
        output.should.equal(true);
    });
    
    it('should return "true" for a correst "isNull" assertion', function () {
        var input_context = new Context ('context_name', function cb () {});
        
        var output = input_context.asserts('my_assertion', null).isNull();
        
        output.should.be.a('boolean');
        output.should.equal(true);
    });
    
    it('should fail silently if not called with assetion method', function () {
        var input_context = new Context ('context_name', function cb () {});
        
        var output = input_context.asserts('my_assertion', true);
        
        output.should.be.an('object');
    });
    
  });
});
