var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('output of 5! must be equal to 120', () => {
      //setup
         const inputNumber = 5;
         const expectedNumber = 120;
      //Exercise
        const result = Calculate.factorial(inputNumber)
      //Verify
      assert.equal(result, expectedNumber)
    });
    
    it('output of 3! must be equal to 6', () => {
      
       // setup
          const inputNumber = 3;
          const expectedNumber = 6;
       //exercise
          const result = Calculate.factorial(inputNumber);
       //verify
       assert.equal(result, expectedNumber)
    });
    it('returns 1 when you pass in 0', () => {

          // Setup
          const inputNumber = 0;
          const expectedNumber = 1;

          //Exercise
          const result = Calculate.factorial(inputNumber);

          //Verify
          assert.equal(result, expectedNumber)
    
    }); 
  });
});