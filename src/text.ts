import * as phoneme from './phoneme';
import * as syllable from './syllable';
import {
    Char, CharCode, HangulRecipe, HangulCodeRecipe,
} from './types';
import { toCharArray, toCharCodeArray } from './utils';

/**
 * 음운을 조합하여 반환합니다.
 * @param recipes
 */
export function assembleCodes(recipes: (HangulCodeRecipe | CharCode)[]): CharCode[] {
    return recipes.map((recipe): CharCode => {
        if (Array.isArray(recipe)) {
            return syllable.assembleHangulCodes(recipe);
        }
        return recipe;
    });
}

/**
 * 음운을 조합하여 반환합니다.
 * @param recipes
 */
export function assemble(recipes: (HangulRecipe | Char)[]): string {
    return recipes.map((recipe): Char => {
        if (Array.isArray(recipe)) {
            const char = syllable.assembleHanguls(recipe);
            return char || '';
        }
        return recipe;
    }).join('');
}

/**
 * 음절을 분해하여 반환합니다.
 * @param codes
 */
export function disassembleCodes(codes: CharCode[]): (HangulCodeRecipe | CharCode)[] {
    return codes.map((code): HangulCodeRecipe | CharCode => {
        const recipe = syllable.disassembleHangulCode(code);
        return recipe || code;
    });
}

/**
 * 음절을 분해하여 반환합니다.
 * @param text
 */
export function disassemble(text: string): (HangulRecipe | Char)[] {
    return text.split('').map((char): HangulRecipe | Char => {
        const recipe = syllable.disassembleHangul(char);
        return recipe || char;
    });
}

/**
 * 음운을 조합하여 반환합니다.
 * @param text
 */
export function flatAssembleCodes(codes: CharCode[]): CharCode[] {
    const refined = [];
    for (let i = 0; i < codes.length; i += 1) {
        const code0 = codes[i];
        const code1 = codes[i + 1];
        const code2 = codes[i + 2];
        if (phoneme.isBasicConsonantCode(code0) && phoneme.isBasicConsonantCode(code1)
            && phoneme.isConsonantCode(code2)) {
            const assembled = phoneme.assembleConsonantCodes(code0, code1);
            if (assembled) {
                refined.push(assembled);
                i += 1;
            } else {
                refined.push(code0);
            }
        } else if (phoneme.isBasicVowelCode(code0) && phoneme.isBasicVowelCode(code1)) {
            const assembled = phoneme.assembleVowelCodes(code0, code1);
            if (assembled) {
                refined.push(assembled);
                i += 1;
            } else {
                refined.push(code0);
            }
        } else {
            refined.push(code0);
        }
    }
    const recipes = [];
    for (let i = 0; i < refined.length; i += 1) {
        const code0 = refined[i];
        const code1 = refined[i + 1];
        const code2 = refined[i + 2];
        const code3 = refined[i + 3];
        if (phoneme.isChoseongCode(code0) && phoneme.isJungseongCode(code1)) {
            if (phoneme.isJongseongCode(code2) && !phoneme.isVowelCode(code3)) {
                recipes.push([code0, code1, code2]);
                i += 2;
            } else {
                recipes.push([code0, code1]);
                i += 1;
            }
        } else {
            recipes.push(code0);
        }
    }
    return assembleCodes(recipes as (HangulCodeRecipe | CharCode)[]);
}

/**
 * 음운을 조합하여 반환합니다.
 * @param chars
 */
export function flatAssemble(chars: Char[]): string {
    return toCharArray(flatAssembleCodes(toCharCodeArray(chars))).join('');
}

/**
 * 음절을 분해하여 반환합니다.
 * @param text
 */
export function flatDisassembleCodes(codes: CharCode[]): CharCode[] {
    return disassembleCodes(codes).flat();
}

/**
 * 음절을 분해하여 반환합니다.
 * @param text
 */
export function flatDisassemble(text: string): string[] {
    return disassemble(text).flat();
}

function flatPhoneme(chars: Char[]): Char[] {
    return chars.map((char): Char[] => {
        if (phoneme.isComplexConsonant(char)) {
            const disassembled = phoneme.disassembleConsonant(char);
            if (disassembled) {
                return disassembled;
            }
        } else if (phoneme.isComplexVowel(char)) {
            const disassembled = phoneme.disassembleVowel(char);
            if (disassembled) {
                return disassembled;
            }
        }
        return [char];
    }).flat();
}

/**
 * textA와 textB의 음운이 같은지 확인합니다.
 * @param textA
 * @param textB
 */
export function equals(textA: string, textB: string): boolean {
    return flatPhoneme(flatDisassemble(textA)).join('') === flatPhoneme(flatDisassemble(textB)).join('');
}

/**
 * target에 search가 포함되는지 확인합니다.
 * @param target
 * @param search
 */
export function includes(target: string, search: string): boolean {
    return flatPhoneme(flatDisassemble(target)).join('').includes(flatPhoneme(flatDisassemble(search)).join(''));
}
