export function divide(numbers: number[]) {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }
    const restOfNumbers = numbers.slice(1);
    return restOfNumbers.reduce((prev, current) => {
        if (current === 0) {
            throw new Error("Division by zero");
        }
        return prev / current;
    }, numbers[0]);
}

export function factorial(number: number) {
    if (number < 0) {
        throw new Error("Negative numbers are not supported");
    }

    if (number === 0 || number === 1) {
        return 1;
    }

    return number * factorial(number - 1);
}