/**
 * 음운을 조합하여 반환합니다.
 * @param codeCho
 * @param codeJung
 * @param codeJong
 */
export function assembleCode(codeCho: number, codeJung: number, codeJong?: number): number {
    const indexCho = [
        0, 1, 3, 6, 7, 8, 16, 17, 18, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29,
    ].indexOf(codeCho - 12593);
    const indexJung = codeJung - 12623;
    if (codeJong) {
        const indexJong = [
            0, 1, 2, 3, 4, 5, 6, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 19, 20, 21,
            22, 23, 25, 26, 27, 28, 29,
        ].indexOf(codeJong - 12593) + 1;
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
 * @param cho
 * @param jung
 * @param jong
 */
export function assemble(cho: string, jung: string, jong?: string): string | null {
    const code = jong
        ? assembleCode(cho.charCodeAt(0), jung.charCodeAt(0), jong.charCodeAt(0))
        : assembleCode(cho.charCodeAt(0), jung.charCodeAt(0));
    return code ? String.fromCharCode(code) : null;
}

export function disassembleCode(code: number): [number, number, number] | [number, number] | 0 {
    if (code >= 44032 && code <= 55203) {
        const hangul = code - 44032;
        const indexCho = [
            0, 1, 3, 6, 7, 8, 16, 17, 18, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29,
        ][Math.floor(Math.floor(hangul / 28) / 21)];
        const indexJung = Math.floor(hangul / 28) % 21;
        const indexJong = [
            -1, 0, 1, 2, 3, 4, 5, 6, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 19, 20, 21,
            22, 23, 25, 26, 27, 28, 29,
        ][hangul % 28];
        if (indexJong >= 0) {
            return [indexCho + 12593, indexJung + 12623, indexJong + 12593];
        }
        return [indexCho + 12593, indexJung + 12623];
    }
    return 0;
}


export function disassemble(char: string): [string, string, string] | [string, string] | null {
    const codes = disassembleCode(char.charCodeAt(0));
    if (codes) {
        if (codes[2]) {
            return [
                String.fromCharCode(codes[0]),
                String.fromCharCode(codes[1]),
                String.fromCharCode(codes[2]),
            ];
        }
        return [String.fromCharCode(codes[0]), String.fromCharCode(codes[1])];
    }
    return null;
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
