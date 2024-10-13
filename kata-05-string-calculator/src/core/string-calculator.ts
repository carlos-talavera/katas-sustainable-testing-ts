// export function sumNumbers(string: string) {
//     if (string) {
//         return string.split(',').reduce((prev, curr) => prev + Number(curr), 0);
//     }
//
//     return 0;
// }

const DEFAULT_SEPARATOR = ',';
const CUSTOM_SEPARATOR_REGEX = /^\/\/(.)\//;

export function sumNumbers(input: string) {
    if (!input) return 0;

    const separator = extractSeparator(input);
    const numbersString = getNumbersString(input);

    return numbersString.split(separator).reduce(sum, 0);
}

function sum(accumulator: number, currentToken: string) {
    return accumulator + parseTokenToNumber(currentToken);
}

function parseTokenToNumber(token: string) {
    const parsedToken = Number(token);
    return isNaN(parsedToken) ? 0 : parsedToken;
}

function extractSeparator(input: string) {
    const customSeparatorMatch = input.match(CUSTOM_SEPARATOR_REGEX);
    return customSeparatorMatch ? customSeparatorMatch[1] : DEFAULT_SEPARATOR;
}

function getNumbersString(input: string) {
    return input.replace(CUSTOM_SEPARATOR_REGEX, '');
}