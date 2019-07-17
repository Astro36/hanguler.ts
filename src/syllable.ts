export type HangulCodeRecipe = [number, number, number] | [number, number];
export type HangulRecipe = [string, string, string] | [string, string];

/**
 * 음운을 조합하여 반환합니다.
 * @param HangulRecipe
 */
export function assembleHangulCodes(recipe: HangulCodeRecipe): number {
    const indexCho = [
        0, 1, 3, 6, 7, 8, 16, 17, 18, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29,
    ].indexOf(recipe[0] - 12593);
    const indexJung = recipe[1] - 12623;
    if (recipe[2]) {
        const indexJong = [
            0, 1, 2, 3, 4, 5, 6, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 19, 20, 21,
            22, 23, 25, 26, 27, 28, 29,
        ].indexOf(recipe[2] - 12593) + 1;
        if (indexCho >= 0 && indexJung >= 0 && indexJong >= 0) {
            return 44032 + (indexCho * 588) + (indexJung * 28) + indexJong;
        }
    } else if (indexCho >= 0 && indexJung >= 0) {
        return 44032 + (indexCho * 588) + (indexJung * 28);
    }
    return 0;
}

/**
 * 음운을 조합하여 반환합니다.
 * @param HangulRecipe
 */
export function assembleHanguls(recipe: HangulRecipe): string | null {
    const code = assembleHangulCodes(
        recipe.map((char): number => char.charCodeAt(0)) as HangulCodeRecipe,
    );
    return code ? String.fromCharCode(code) : null;
}

/**
 * 음절을 분해하여 반환합니다.
 * @param code
 */
export function disassembleHangulCode(code: number): HangulCodeRecipe | 0 {
    if (code >= 44032 && code <= 55203) {
        const hangul = code - 44032;
        const indexCho = [
            0, 1, 3, 6, 7, 8, 16, 17, 18, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29,
        ][Math.floor(Math.floor(hangul / 28) / 21)];
        const indexJung = Math.floor(hangul / 28) % 21;
        const indexJong = [
            -1, 0, 1, 2, 3, 4, 5, 6, 8, 9,
            10, 11, 12, 13, 14, 15, 16, 17, 19, 20,
            21, 22, 23, 25, 26, 27, 28, 29,
        ][hangul % 28];
        if (indexJong >= 0) {
            return [indexCho + 12593, indexJung + 12623, indexJong + 12593];
        }
        return [indexCho + 12593, indexJung + 12623];
    }
    return 0;
}

/**
 * 음절을 분해하여 반환합니다.
 * @param char
 */
export function disassembleHangul(char: string): HangulRecipe | null {
    const codes = disassembleHangulCode(char.charCodeAt(0));
    if (codes) {
        return codes.map((code): string => String.fromCharCode(code)) as HangulRecipe;
    }
    return null;
}

/**
 * code에 받침이 있는지 확인합니다.
 * @param code
 */
export function endsWithConsonantCode(code: number): boolean {
    return code >= 44032 && code <= 55203 && (code - 44032) % 28 > 0;
}

/**
 * char에 받침이 있는지 확인합니다.
 * @param char
 */
export function endsWithConsonant(char: string): boolean {
    return endsWithConsonantCode(char.charCodeAt(0));
}

/**
 * code가 한글인지 확인합니다.
 * @param code
 */
export function isHangulCode(code: number): boolean {
    return (code >= 12593 && code <= 12643)
        || (code >= 44032 && code <= 55203);
}

/**
 * char이 한글인지 확인합니다.
 * @param char
 */
export function isHangul(char: string): boolean {
    return isHangulCode(char.charCodeAt(0));
}

/**
 * code가 완전한 한글인지 확인합니다.
 * @param code
 */
export function isCompleteHangulCode(code: number): boolean {
    return code >= 44032 && code <= 55203;
}

/**
 * char이 완전한 한글인지 확인합니다.
 * @param char
 */
export function isCompleteHangul(char: string): boolean {
    return isCompleteHangulCode(char.charCodeAt(0));
}
