import {divide, factorial} from "./math";
import {describe, expect, it} from "./testLib";

describe("divide", () => {
    it("should throw an error for an empty array", () => {
       const result = () => divide([]);
       const expected = "empty";

       expect(result).toThrowError(expected);
    });

    it("should return the number itself if there's only one element", () => {
        const result = divide([3]);
        const expected = 3;

        expect(result).toBe(expected);
    });

    it("should divide numbers correctly", () => {
        const result = divide([15, 3, 5]);
        const expected = 1;

        expect(result).toBe(expected);
    });

    it("should throw an error when attempting to divide by zero", () => {
        const result = () => divide([15, 0]);
        const expected = "zero";

        expect(result).toThrowError(expected);
    });

    // Async example
    it("should throw an error when attempting to divide by zero (async)", async () => {
        const result = () => Promise.resolve(divide([15, 0]));
        const expected = "zero";

        await expect(result).toThrowError(expected);
    });
});

describe("factorial", () => {
    it("should return 1 for 0 or 1", () => {
        const resultZero = factorial(0);
        const resultOne = factorial(1);

        const expected = 1;

        expect(resultZero).toBe(expected);
        expect(resultOne).toBe(expected);
    });

    it("should calculate factorial correctly", () => {
        const result = factorial(5);
        const expected = 120;

        expect(result).toBe(expected);
    });

    it("should throw an error for negative numbers", () => {
        const result = () => factorial(-1);
        const expected = /negative numbers/i;

        expect(result).toThrowError(expected);
    });

    it("should throw an error for non-integer numbers", () => {
        const result = () => factorial(1.5);
        const expected = /integer/i;

        expect(result).toThrowError(expected);
    });
});
