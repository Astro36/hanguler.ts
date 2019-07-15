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
