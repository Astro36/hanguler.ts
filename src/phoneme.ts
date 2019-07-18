import { Char, CharCode } from './types';
import { toChar, toCharCode } from './utils';

/**
 * codeA와 codeB를 합쳐 겹자음(겹받침)으로 만듭니다.
 * @param codeA
 * @param codeB
 */
export function assembleConsonantCodes(codeA: CharCode, codeB: CharCode): CharCode {
    const recipe = [
        [12593, 12613, 12595],
        [12596, 12616, 12597],
        [12601, 12593, 12602],
        [12601, 12609, 12603],
        [12601, 12610, 12604],
        [12601, 12613, 12605],
        [12601, 12620, 12606],
        [12601, 12621, 12607],
        [12601, 12622, 12608],
        [12610, 12613, 12612],
    ].find(([a, b]): boolean => codeA === a && codeB === b);
    return recipe ? recipe[2] : 0;
}

/**
 * charA와 charB를 합쳐 겹자음(겹받침)으로 만듭니다.
 * @param charA
 * @param charB
 */
export function assembleConsonants(charA: Char, charB: Char): Char | null {
    const code = assembleConsonantCodes(toCharCode(charA), toCharCode(charB));
    return code ? toChar(code) : null;
}

/**
 * codeA와 codeB를 합쳐 겹모음(ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, ㅟ, ㅢ)으로 만듭니다.
 * @param codeA
 * @param codeB
 */
export function assembleVowelCodes(codeA: CharCode, codeB: CharCode): CharCode {
    const recipe = [
        [12631, 12623, 12632],
        [12631, 12624, 12633],
        [12631, 12643, 12634],
        [12636, 12627, 12637],
        [12636, 12628, 12638],
        [12636, 12643, 12639],
        [12641, 12643, 12642],
    ].find(([a, b]): boolean => codeA === a && codeB === b);
    return recipe ? recipe[2] : 0;
}

/**
 * charA와 charB를 합쳐 겹모음(ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, ㅟ, ㅢ)으로 만듭니다.
 * @param charA
 * @param charB
 */
export function assembleVowels(charA: Char, charB: Char): Char | null {
    const code = assembleVowelCodes(toCharCode(charA), toCharCode(charB));
    return code ? toChar(code) : null;
}

/**
 * 겹자음(겹받침)을 분리합니다.
 * @param code
 */
export function disassembleConsonantCode(code: CharCode): [CharCode, CharCode] | 0 {
    const recipe = [
        [12593, 12613, 12595],
        [12596, 12616, 12597],
        [12601, 12593, 12602],
        [12601, 12609, 12603],
        [12601, 12610, 12604],
        [12601, 12613, 12605],
        [12601, 12620, 12606],
        [12601, 12621, 12607],
        [12601, 12622, 12608],
        [12610, 12613, 12612],
    ].find(([, , c]): boolean => code === c);
    return recipe ? [recipe[0], recipe[1]] : 0;
}

/**
 * 겹자음(겹받침)을 분리합니다.
 * @param char
 */
export function disassembleConsonant(char: Char): [Char, Char] | null {
    const codes = disassembleConsonantCode(toCharCode(char));
    return codes ? [toChar(codes[0]), toChar(codes[1])] : null;
}

/**
 * 겹모음(ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, ㅟ, ㅢ)를 분리합니다.
 * @param code
 */
export function disassembleVowelCode(code: CharCode): [CharCode, CharCode] | 0 {
    const recipe = [
        [12631, 12623, 12632],
        [12631, 12624, 12633],
        [12631, 12643, 12634],
        [12636, 12627, 12637],
        [12636, 12628, 12638],
        [12636, 12643, 12639],
        [12641, 12643, 12642],
    ].find(([, , c]): boolean => code === c);
    return recipe ? [recipe[0], recipe[1]] : 0;
}

/**
 * 겹모음(ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, ㅟ, ㅢ)를 분리합니다.
 * @param char
 */
export function disassembleVowel(char: Char): [Char, Char] | null {
    const codes = disassembleVowelCode(toCharCode(char));
    return codes ? [toChar(codes[0]), toChar(codes[1])] : null;
}

/**
 * code가 한글 자음인지 확인합니다.
 * @param code
 */
export function isConsonantCode(code: CharCode): boolean {
    return code >= 12593 && code <= 12622;
}

/**
 * char이 한글 자음인지 확인합니다.
 * @param char
 */
export function isConsonant(char: Char): boolean {
    return isConsonantCode(toCharCode(char));
}

/**
 * code가 한글 기본 자음인지 확인합니다.
 * @param code
 */
export function isBasicConsonantCode(code: CharCode): boolean {
    return (code >= 12593 && code <= 12594)
        || code === 12596
        || (code >= 12598 && code <= 12601)
        || (code >= 12609 && code <= 12611)
        || (code >= 12613 && code <= 12622);
}

/**
 * char이 한글 기본 자음인지 확인합니다.
 * @param char
 */
export function isBasicConsonant(char: Char): boolean {
    return isBasicConsonantCode(toCharCode(char));
}

/**
 * code가 한글 겹자음(겹받침)인지 확인합니다.
 * @param code
 */
export function isComplexConsonantCode(code: CharCode): boolean {
    return code === 12595
        || code === 12597
        || (code >= 12602 && code <= 12608)
        || code === 12612;
}

/**
 * char이 한글 겹자음(겹받침)인지 확인합니다.
 * @param char
 */
export function isComplexConsonant(char: Char): boolean {
    return isComplexConsonantCode(toCharCode(char));
}

/**
 * code가 한글 모음인지 확인합니다.
 * @param code
 */
export function isVowelCode(code: CharCode): boolean {
    return code >= 12623 && code <= 12643;
}

/**
 * char이 한글 모음인지 확인합니다.
 * @param char
 */
export function isVowel(char: Char): boolean {
    return isVowelCode(toCharCode(char));
}

/**
 * code가 한글 기본 모음인지 확인합니다.
 * @param code
 */
export function isBasicVowelCode(code: CharCode): boolean {
    return (code >= 12623 && code <= 12631)
        || (code >= 12635 && code <= 12636)
        || (code >= 12640 && code <= 12641)
        || code === 12643;
}

/**
 * char이 한글 기본 모음인지 확인합니다.
 * @param char
 */
export function isBasicVowel(char: Char): boolean {
    return isBasicVowelCode(toCharCode(char));
}

/**
 * code가 한글 겹모음(ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, ㅟ, ㅢ)인지 확인합니다.
 * @param code
 */
export function isComplexVowelCode(code: CharCode): boolean {
    return (code >= 12632 && code <= 12634)
        || (code >= 12637 && code <= 12639)
        || code === 12642;
}

/**
 * char이 한글 겹모음(ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, ㅟ, ㅢ)인지 확인합니다.
 * @param char
 */
export function isComplexVowel(char: Char): boolean {
    return isComplexVowelCode(toCharCode(char));
}

/**
 * code가 한글 초성으로 사용될 수 있는지 확인합니다.
 * @param code
 */
export function isChoseongCode(code: CharCode): boolean {
    return code === 12593
        || code === 12594
        || code === 12596
        || (code >= 12599 && code <= 12601)
        || (code >= 12609 && code <= 12611)
        || (code >= 12613 && code <= 12622);
}

/**
 * char이 한글 초성으로 사용될 수 있는지 확인합니다.
 * @param char
 */
export function isChoseong(char: Char): boolean {
    return isChoseongCode(toCharCode(char));
}

/**
 * code가 한글 중성으로 사용될 수 있는지 확인합니다.
 * @param code
 */
export function isJungseongCode(code: CharCode): boolean {
    return code >= 12623 && code <= 12643;
}

/**
 * char이 한글 중성으로 사용될 수 있는지 확인합니다.
 * @param char
 */
export function isJungseong(char: Char): boolean {
    return isJungseongCode(toCharCode(char));
}

/**
 * code가 한글 종성으로 사용될 수 있는지 확인합니다.
 * @param code
 */
export function isJongseongCode(code: CharCode): boolean {
    return (code >= 12593 && code <= 12599)
        || (code >= 12601 && code <= 12610)
        || (code >= 12612 && code <= 12616)
        || (code >= 12618 && code <= 12622);
}

/**
 * char이 한글 종성으로 사용될 수 있는지 확인합니다.
 * @param char
 */
export function isJongseong(char: Char): boolean {
    return isJongseongCode(toCharCode(char));
}
