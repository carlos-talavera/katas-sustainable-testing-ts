export function toCamelCase(string: string) {
    const words = string.split(/[-_\s]/);
    return words.map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join('');
}