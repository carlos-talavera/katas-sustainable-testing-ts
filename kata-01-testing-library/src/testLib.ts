export function expect<T>(result: T) {
    return {
        toBe: function (expected: T) {
            if (expected !== result) {
                throw new Error(`❌ ${result} expected to be ${expected}`);
            }
        },
        toThrowError: async function (expected: string | RegExp) {
            try {
                await (result as () => void | Promise<void>)();
            } catch (error) {
                const errorMessage = (error as Error).message;
                const expectedRegex = new RegExp(expected);

                if (!expectedRegex.test(errorMessage)) {
                    throw new Error(`❌ "${errorMessage}" expected to match: ${expected}`);
                }
            }
        }
    }
}

export async function test(description: string, callback: () => void | Promise<void>) {
    try {
        await callback();
        console.log(`${description} ✅`);
    } catch (error) {
        console.log(error);
    }
}

export function describe(description: string, callback: () => void) {
    console.log(description);
    callback();
}

export const it = test;