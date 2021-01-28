const assert = require('assert');
const { tvRemotePresses } = require('../problems/tvRemote.js');

describe('TV Remote Tests', () => {
   it('Test Case #1', () => {
      const word = 'codewars';
      const solution = 36;
      const output = tvRemotePresses(word);
      assert.strictEqual(output, solution);    
   })    
})