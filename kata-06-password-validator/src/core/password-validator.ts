const MINIMUM_CHARACTER_LENGTH = 6;

export function isStrongPassword(password: string) {
    return isMinimumLength(password)
        && containsNumber(password)
        && containsLowerCase(password)
        && containsUpperCase(password)
        && containsUnderscore(password);
}

function isMinimumLength(password: string) {
    return password.length >= MINIMUM_CHARACTER_LENGTH;
}

function containsNumber(password: string) {
    return /\d/g.test(password);
}

function containsLowerCase(password: string) {
    return /[a-z]/g.test(password);
}

function containsUpperCase(password: string) {
    return /[A-Z]/g.test(password);
}

function containsUnderscore(password: string) {
    return /_/g.test(password);
}