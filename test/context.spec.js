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
});
