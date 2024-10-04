import {toCamelCase} from "../core/camel-case-converter";

describe("CamelCaseConverter", () => {
    it("should return an empty string for an empty string", () => {
        const result = toCamelCase("");
        const expected = "";

        expect(result).toBe(expected);
    });
    it("should return the same word for a word with the first letter capitalized", () => {
        const result = toCamelCase("Foo");
        const expected = "Foo";

        expect(result).toBe(expected);
    });
    it("should return the words chained in CamelCase format for words separated by spaces with the first letter capitalized", () => {
        const result = toCamelCase("Foo Bar");
        const expected = "FooBar";

        expect(result).toBe(expected);
    });
    it("should return the words chained in CamelCase format for words separated by hyphens with the first letter capitalized", () => {
        const result = toCamelCase("Foo_Bar-Foo");
        const expected = "FooBarFoo";

        expect(result).toBe(expected);
    });
    it("should return the word with the first letter capitalized for a word with the first letter in lowercase", () => {
        const result = toCamelCase("foo");
        const expected = "Foo";

        expect(result).toBe(expected);
    });
    it("should return the words chained in CamelCase format for lowercase words", () => {
        const result = toCamelCase("foo_bar foo");
        const expected = "FooBarFoo";

        expect(result).toBe(expected);
    });
});