let chai =require ("chai");
let assert= chai.assert;

import inARange from "../app";

//what kinds of inputs will my function take?
//it will take two parameters, that are both numbers
//think of all the different kinds of possibilities you might encounter
//write them out in an object

let testCases = {
    inFirstRange: {
        num1: 40,
        num2: 60
    },
    inSecondRange : {
        num1: 70,
        num2: 100
    },
    outOfFirstRange:{
        num1: 35,
        num2: 67
    },
    outOfSecondRange:{
        num1: 69,
        num2: 101
    }
}

describe("range numbers test",()=>{
    it("should pass if numbers are in range of 40-60",()=>{
        assert.equal(inARange(testCases.inFirstRange.num1,testCases.inFirstRange.num2), true )
    });
    it("should pass if numbers are in range of 70-100",()=>{
        assert.equal(inARange(testCases.inSecondRange.num1,testCases.inSecondRange.num2),true)
    });
    it("should fail if numbers are out range of 40-60",()=>{
        assert.equal(inARange(testCases.outOfFirstRange.num1,testCases.outOfFirstRange.num2),false)
    });
 it("should fail if numbers are out range of 70-100",()=>{
assert.equal(inARange(testCases.outOfSecondRange.num1,testCases.outOfSecondRange.num2),false)
});



