var should = require('chai').should();
var storm = require('../src/storm')();

describe('storm', function () {
  it('should return the summary string if run without arguments', function () {
      var output = storm.run();
      
      output.should.be.a('string');
      output.should.equal('0 assertions: 0 failures\nElapsed time: 0ms (0 seconds)');
  });
});
