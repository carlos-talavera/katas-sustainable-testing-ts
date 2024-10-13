import {sumNumbers} from "../core/string-calculator";

describe('StringCalculator', () => {
    it('can handle null and empty strings', () => {
       expect(sumNumbers(null)).toBe(0);
       expect(sumNumbers('')).toBe(0);
    });

    it('can handle one number', () => {
        expect(sumNumbers('18')).toBe(18);
    });

    it('can handle numbers separated by commas', () => {
        expect(sumNumbers('5,10,15')).toBe(30);
    });

    it('can handle non-numeric values', () => {
       expect(sumNumbers('a')).toBe(0);
       expect(sumNumbers('8,a,10')).toBe(18);
    });

    it('can handle custom separators', () => {
       expect(sumNumbers('//%/5%2')).toBe(7);
       expect(sumNumbers('//%/4,6')).toBe(0);
       expect(sumNumbers('//#/4#6')).toBe(10);
    });
});