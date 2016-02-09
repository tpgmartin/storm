var should = require('chai').should();
var Context = require('../src/context');
var Storm = require('../src/storm')();

describe('Storm', function () {
    it('should return the summary string if run without arguments', function () {
      var output = Storm.run();
        
      output.should.be.a('string');
      output.should.equal('0 assertions: 0 failures\nElapsed time: 0ms (0 seconds)');
    });
});
