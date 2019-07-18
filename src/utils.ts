import { Char, CharCode } from './types';

export function toChar(code: CharCode): Char {
    return String.fromCharCode(code) as Char;
}

export function toCharArray(codes: CharCode[]): Char[] {
    return codes.map((code): Char => String.fromCharCode(code) as Char);
}

export function toCharCode(char: Char): CharCode {
    return char.charCodeAt(0);
}

export function toCharCodeArray(chars: Char[]): CharCode[] {
    return chars.map((char): CharCode => char.charCodeAt(0));
}
