var Context = require('./context');

// TODO
// 1. Define run
// 2. Define context
// 5. Define asserts
// 6. Define isTrue

module.exports = function storm () {
  
  function run () {
    return '0 assertions: 0 failures\nElapsed time: 0ms (0 seconds)'
  };
  
  return {
    run: run
  };
  
};