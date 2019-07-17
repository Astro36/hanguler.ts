/**
 * codeA와 codeB를 합쳐 겹자음으로 만듭니다.
 * @param codeA
 * @param codeB
 */
export function assembleConsonantCodes(codeA: number, codeB: number): number {
    return ([
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
    ].find(([a, b]) => codeA === a && codeB === b) || [])[2] || 0;
}

/**
 * charA와 charB를 합쳐 겹자음으로 만듭니다.
 * @param charA
 * @param charB
 */
export function assembleConsonants(charA: string, charB: string): string | null {
    const code = assembleConsonantCodes(charA.charCodeAt(0), charB.charCodeAt(0));
    return code ? String.fromCharCode(code) : null;
}

/**
 * codeA와 codeB를 합쳐 겹모음으로 만듭니다.
 * @param codeA
 * @param codeB
 */
export function assembleVowelCodes(codeA: number, codeB: number): number {
    return ([
        [12631, 12623, 12632],
        [12631, 12624, 12633],
        [12631, 12643, 12634],
        [12636, 12627, 12637],
        [12636, 12628, 12638],
        [12636, 12643, 12639],
        [12641, 12643, 12642],
    ].find(([a, b]) => codeA === a && codeB === b) || [])[2] || 0;
}

/**
 * charA와 charB를 합쳐 겹모음으로 만듭니다.
 * @param charA
 * @param charB
 */
export function assembleVowels(charA: string, charB: string): string | null {
    const code = assembleVowelCodes(charA.charCodeAt(0), charB.charCodeAt(0));
    return code ? String.fromCharCode(code) : null;
}

/**
 * code가 한글 자음인지 확인합니다.
 * @param code
 */
export function isConsonantCode(code: number): boolean {
    return code >= 12593 && code <= 12622;
}

/**
 * char이 한글 자음인지 확인합니다.
 * @param char
 */
export function isConsonant(char: string): boolean {
    return isConsonantCode(char.charCodeAt(0));
}

/**
 * code가 한글 기본 자음인지 확인합니다.
 * @param code
 */
export function isBasicConsonantCode(code: number): boolean {
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
export function isBasicConsonant(char: string): boolean {
    return isBasicConsonantCode(char.charCodeAt(0));
}

/**
 * code가 한글 겹자음인지 확인합니다.
 * @param code
 */
export function isComplexConsonantCode(code: number): boolean {
    return code === 12595
        || code === 12597
        || (code >= 12602 && code <= 12608)
        || code === 12612;
}

/**
 * char이 한글 겹자음인지 확인합니다.
 * @param char
 */
export function isComplexConsonant(char: string): boolean {
    return isComplexConsonantCode(char.charCodeAt(0));
}

/**
 * code가 한글 모음인지 확인합니다.
 * @param code
 */
export function isVowelCode(code: number): boolean {
    return code >= 12623 && code <= 12643;
}

/**
 * char이 한글 모음인지 확인합니다.
 * @param char
 */
export function isVowel(char: string): boolean {
    return isVowelCode(char.charCodeAt(0));
}

/**
 * code가 한글 기본 모음인지 확인합니다.
 * @param code
 */
export function isBasicVowelCode(code: number): boolean {
    return (code >= 12623 && code <= 12631)
        || (code >= 12635 && code <= 12636)
        || (code >= 12640 && code <= 12641)
        || code === 12643;
}

/**
 * char이 한글 기본 모음인지 확인합니다.
 * @param char
 */
export function isBasicVowel(char: string): boolean {
    return isBasicVowelCode(char.charCodeAt(0));
}

/**
 * code가 한글 겹모음인지 확인합니다.
 * @param code
 */
export function isComplexVowelCode(code: number): boolean {
    return (code >= 12632 && code <= 12634)
        || (code >= 12637 && code <= 12639)
        || code === 12642;
}

/**
 * char이 한글 겹모음인지 확인합니다.
 * @param char
 */
export function isComplexVowel(char: string): boolean {
    return isComplexVowelCode(char.charCodeAt(0));
}

/**
 * code가 한글 초성으로 사용될 수 있는지 확인합니다.
 * @param code
 */
export function isChoseongCode(code: number): boolean {
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
export function isChoseong(char: string): boolean {
    return isChoseongCode(char.charCodeAt(0));
}

/**
 * code가 한글 중성으로 사용될 수 있는지 확인합니다.
 * @param code
 */
export function isJungseongCode(code: number): boolean {
    return code >= 12623 && code <= 12643;
}

/**
 * char이 한글 중성으로 사용될 수 있는지 확인합니다.
 * @param char
 */
export function isJungseong(char: string): boolean {
    return isJungseongCode(char.charCodeAt(0));
}

/**
 * code가 한글 종성으로 사용될 수 있는지 확인합니다.
 * @param code
 */
export function isJongseongCode(code: number): boolean {
    return (code >= 12593 && code <= 12599)
        || (code >= 12601 && code <= 12610)
        || (code >= 12612 && code <= 12616)
        || (code >= 12618 && code <= 12622);
}

/**
 * char이 한글 종성으로 사용될 수 있는지 확인합니다.
 * @param char
 */
export function isJongseong(char: string): boolean {
    return isJongseongCode(char.charCodeAt(0));
}
