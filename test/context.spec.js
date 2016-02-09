var should = require('chai').should();
var Context = require('../src/context');

describe('Context', function () {
  describe('creating a new context instance', function () {
    it('should return new context with name and callback', function () {
        var input_name = 'input_name';
        var input_cb = function input_cb () {};
        
        var output = new Context (input_name, input_cb);
        
        output.name.should.be.a('string');
        output.name.should.equal('input_name');
        output.callback.should.a('function');
    });  
  });
  
  describe('calling "asserts"', function () {
    it('should create a new assertion object', function () {
      var input_context = new Context ('context_name', function cb () {});
      
      var output = input_context.asserts('my_assertion', true);
      
      output.name.should.be.a('string');
      output.name.should.equal('context_name');
      output.expectedValue.should.a('boolean');
      output.expectedValue.should.equal(true);
      output.contextName.should.equal('my_assertion');
    });
  });
});
