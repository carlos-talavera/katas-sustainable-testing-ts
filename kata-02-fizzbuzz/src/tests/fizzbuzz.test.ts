import {fizzBuzz} from "../core/fizzbuzz";

describe("FizzBuzz", () => {
   it("should return 1 for the number 1", () => {
       const result = fizzBuzz(1);
       const expected = "1";

       expect(result).toBe(expected);
   });
   it("should return 'fizz' for the number 3", () => {
       const result = fizzBuzz(3);
       const expected = "fizz";

       expect(result).toBe(expected);
   });
   it("should return 'buzz' for the number 5", () => {
       const result = fizzBuzz(5);
       const expected = "buzz";

       expect(result).toBe(expected);
   });
   it("should return 'fizzbuzz' for the number 15", () => {
       const result = fizzBuzz(15);
       const expected = "fizzbuzz";

       expect(result).toBe(expected);
   });
   it("should return 'fizz' for a number divisible by 3", () => {
       const result = fizzBuzz(6);
       const expected = "fizz";

       expect(result).toBe(expected);
   });
   it("should return 'buzz' for a number divisible by 5", () => {
       const result = fizzBuzz(10);
       const expected = "buzz";

       expect(result).toBe(expected);
   });
   it("should return 'fizzbuzz' for a number divisible by 15", () => {
       const result = fizzBuzz(30);
       const expected = "fizzbuzz";

       expect(result).toBe(expected);
   });
   it("should return the string of the number itself for the rest of numbers", () => {
       const result = fizzBuzz(28);
       const expected = "28";

       expect(result).toBe(expected);
   });

});