import assert from 'assert';

import * as phoneme from '../src/phoneme';

describe('module:phomene', (): void => {
    describe('isConsonant()', (): void => {
        it('should return true when char = "ㄱ"', (): void => {
            assert(phoneme.isConsonant('ㄱ'));
        });
        it('should return true when char = "ㄲ"', (): void => {
            assert(phoneme.isConsonant('ㄲ'));
        });
        it('should return true when char = "ㄳ"', (): void => {
            assert(phoneme.isConsonant('ㄳ'));
        });
        it('should return false when char = "ㅏ"', (): void => {
            assert(!phoneme.isConsonant('ㅏ'));
        });
        it('should return false when char = "ㅢ"', (): void => {
            assert(!phoneme.isConsonant('ㅢ'));
        });
        it('should return false when char = "가"', (): void => {
            assert(!phoneme.isConsonant('가'));
        });
        it('should return false when char = "1"', (): void => {
            assert(!phoneme.isConsonant('1'));
        });
        it('should return false when char = "A"', (): void => {
            assert(!phoneme.isConsonant('A'));
        });
    });
    describe('isBasicConsonant()', (): void => {
        it('should return true when char = "ㄱ"', (): void => {
            assert(phoneme.isBasicConsonant('ㄱ'));
        });
        it('should return true when char = "ㄲ"', (): void => {
            assert(phoneme.isBasicConsonant('ㄲ'));
        });
        it('should return false when char = "ㄳ"', (): void => {
            assert(!phoneme.isBasicConsonant('ㄳ'));
        });
        it('should return false when char = "ㅏ"', (): void => {
            assert(!phoneme.isBasicConsonant('ㅏ'));
        });
        it('should return false when char = "ㅢ"', (): void => {
            assert(!phoneme.isBasicConsonant('ㅢ'));
        });
        it('should return false when char = "가"', (): void => {
            assert(!phoneme.isBasicConsonant('가'));
        });
        it('should return false when char = "1"', (): void => {
            assert(!phoneme.isBasicConsonant('1'));
        });
        it('should return false when char = "A"', (): void => {
            assert(!phoneme.isBasicConsonant('A'));
        });
    });
    describe('isComplexConsonant()', (): void => {
        it('should return false when char = "ㄱ"', (): void => {
            assert(!phoneme.isComplexConsonant('ㄱ'));
        });
        it('should return false when char = "ㄲ"', (): void => {
            assert(!phoneme.isComplexConsonant('ㄲ'));
        });
        it('should return true when char = "ㄳ"', (): void => {
            assert(phoneme.isComplexConsonant('ㄳ'));
        });
        it('should return false when char = "ㅏ"', (): void => {
            assert(!phoneme.isComplexConsonant('ㅏ'));
        });
        it('should return false when char = "ㅢ"', (): void => {
            assert(!phoneme.isComplexConsonant('ㅢ'));
        });
        it('should return false when char = "가"', (): void => {
            assert(!phoneme.isComplexConsonant('가'));
        });
        it('should return false when char = "1"', (): void => {
            assert(!phoneme.isComplexConsonant('1'));
        });
        it('should return false when char = "A"', (): void => {
            assert(!phoneme.isComplexConsonant('A'));
        });
    });
    describe('isVowel()', (): void => {
        it('should return false when char = "ㄱ"', (): void => {
            assert(!phoneme.isVowel('ㄱ'));
        });
        it('should return false when char = "ㄲ"', (): void => {
            assert(!phoneme.isVowel('ㄲ'));
        });
        it('should return false when char = "ㄳ"', (): void => {
            assert(!phoneme.isVowel('ㄳ'));
        });
        it('should return true when char = "ㅏ"', (): void => {
            assert(phoneme.isVowel('ㅏ'));
        });
        it('should return true when char = "ㅢ"', (): void => {
            assert(phoneme.isVowel('ㅢ'));
        });
        it('should return false when char = "가"', (): void => {
            assert(!phoneme.isVowel('가'));
        });
        it('should return false when char = "1"', (): void => {
            assert(!phoneme.isVowel('1'));
        });
        it('should return false when char = "A"', (): void => {
            assert(!phoneme.isVowel('A'));
        });
    });
    describe('isBasicVowel()', (): void => {
        it('should return false when char = "ㄱ"', (): void => {
            assert(!phoneme.isBasicVowel('ㄱ'));
        });
        it('should return false when char = "ㄲ"', (): void => {
            assert(!phoneme.isBasicVowel('ㄲ'));
        });
        it('should return false when char = "ㄳ"', (): void => {
            assert(!phoneme.isBasicVowel('ㄳ'));
        });
        it('should return true when char = "ㅏ"', (): void => {
            assert(phoneme.isBasicVowel('ㅏ'));
        });
        it('should return false when char = "ㅢ"', (): void => {
            assert(!phoneme.isBasicVowel('ㅢ'));
        });
        it('should return false when char = "가"', (): void => {
            assert(!phoneme.isBasicVowel('가'));
        });
        it('should return false when char = "1"', (): void => {
            assert(!phoneme.isBasicVowel('1'));
        });
        it('should return false when char = "A"', (): void => {
            assert(!phoneme.isBasicVowel('A'));
        });
    });
    describe('isComplexVowel()', (): void => {
        it('should return false when char = "ㄱ"', (): void => {
            assert(!phoneme.isComplexVowel('ㄱ'));
        });
        it('should return false when char = "ㄲ"', (): void => {
            assert(!phoneme.isComplexVowel('ㄲ'));
        });
        it('should return false when char = "ㄳ"', (): void => {
            assert(!phoneme.isComplexVowel('ㄳ'));
        });
        it('should return false when char = "ㅏ"', (): void => {
            assert(!phoneme.isComplexVowel('ㅏ'));
        });
        it('should return true when char = "ㅢ"', (): void => {
            assert(phoneme.isComplexVowel('ㅢ'));
        });
        it('should return false when char = "가"', (): void => {
            assert(!phoneme.isComplexVowel('가'));
        });
        it('should return false when char = "1"', (): void => {
            assert(!phoneme.isComplexVowel('1'));
        });
        it('should return false when char = "A"', (): void => {
            assert(!phoneme.isComplexVowel('A'));
        });
    });
    describe('isChoseong()', (): void => {
        it('should return true when char = "ㄱ"', (): void => {
            assert(phoneme.isChoseong('ㄱ'));
        });
        it('should return true when char = "ㄲ"', (): void => {
            assert(phoneme.isChoseong('ㄲ'));
        });
        it('should return false when char = "ㄳ"', (): void => {
            assert(!phoneme.isChoseong('ㄳ'));
        });
        it('should return false when char = "ㅏ"', (): void => {
            assert(!phoneme.isChoseong('ㅏ'));
        });
        it('should return false when char = "ㅢ"', (): void => {
            assert(!phoneme.isChoseong('ㅢ'));
        });
        it('should return false when char = "가"', (): void => {
            assert(!phoneme.isChoseong('가'));
        });
        it('should return false when char = "1"', (): void => {
            assert(!phoneme.isChoseong('1'));
        });
        it('should return false when char = "A"', (): void => {
            assert(!phoneme.isChoseong('A'));
        });
    });
    describe('isJungseong()', (): void => {
        it('should return false when char = "ㄱ"', (): void => {
            assert(!phoneme.isJungseong('ㄱ'));
        });
        it('should return false when char = "ㄲ"', (): void => {
            assert(!phoneme.isJungseong('ㄲ'));
        });
        it('should return false when char = "ㄳ"', (): void => {
            assert(!phoneme.isJungseong('ㄳ'));
        });
        it('should return true when char = "ㅏ"', (): void => {
            assert(phoneme.isJungseong('ㅏ'));
        });
        it('should return true when char = "ㅢ"', (): void => {
            assert(phoneme.isJungseong('ㅢ'));
        });
        it('should return false when char = "가"', (): void => {
            assert(!phoneme.isJungseong('가'));
        });
        it('should return false when char = "1"', (): void => {
            assert(!phoneme.isJungseong('1'));
        });
        it('should return false when char = "A"', (): void => {
            assert(!phoneme.isJungseong('A'));
        });
    });
    describe('isJongseong()', (): void => {
        it('should return true when char = "ㄱ"', (): void => {
            assert(phoneme.isJongseong('ㄱ'));
        });
        it('should return true when char = "ㄲ"', (): void => {
            assert(phoneme.isJongseong('ㄲ'));
        });
        it('should return true when char = "ㄳ"', (): void => {
            assert(phoneme.isJongseong('ㄳ'));
        });
        it('should return false when char = "ㅏ"', (): void => {
            assert(!phoneme.isJongseong('ㅏ'));
        });
        it('should return false when char = "ㅢ"', (): void => {
            assert(!phoneme.isJongseong('ㅢ'));
        });
        it('should return false when char = "가"', (): void => {
            assert(!phoneme.isJongseong('가'));
        });
        it('should return false when char = "1"', (): void => {
            assert(!phoneme.isJongseong('1'));
        });
        it('should return false when char = "A"', (): void => {
            assert(!phoneme.isJongseong('A'));
        });
    });
    describe('assembleConsonants()', (): void => {
        it('should return null when charA = "ㄱ" and charB = "ㄴ"', (): void => {
            assert.equal(phoneme.assembleConsonants('ㄱ', 'ㄴ'), null);
        });
        it('should return true when charA = "ㄱ" and charB = "ㅅ"', (): void => {
            assert.equal(phoneme.assembleConsonants('ㄱ', 'ㅅ'), 'ㄳ');
        });
        it('should return null when charA = "ㄱ" and charB = "A"', (): void => {
            assert.equal(phoneme.assembleConsonants('ㄱ', 'A'), null);
        });
        it('should return null when charA = "ㅗ" and charB = "ㅏ"', (): void => {
            assert.equal(phoneme.assembleConsonants('ㅗ', 'ㅏ'), null);
        });
        it('should return null when charA = "ㅗ" and charB = "ㅓ"', (): void => {
            assert.equal(phoneme.assembleConsonants('ㅗ', 'ㅓ'), null);
        });
        it('should return null when charA = "A" and charB = "ㅓ"', (): void => {
            assert.equal(phoneme.assembleConsonants('A', 'ㅏ'), null);
        });
    });
    describe('assembleVowels()', (): void => {
        it('should return null when charA = "ㄱ" and charB = "ㄴ"', (): void => {
            assert.equal(phoneme.assembleVowels('ㄱ', 'ㄴ'), null);
        });
        it('should return null when charA = "ㄱ" and charB = "ㅅ"', (): void => {
            assert.equal(phoneme.assembleVowels('ㄱ', 'ㅅ'), null);
        });
        it('should return null when charA = "ㄱ" and charB = "A"', (): void => {
            assert.equal(phoneme.assembleVowels('ㄱ', 'A'), null);
        });
        it('should return "ㅘ" when charA = "ㅗ" and charB = "ㅏ"', (): void => {
            assert.equal(phoneme.assembleVowels('ㅗ', 'ㅏ'), 'ㅘ');
        });
        it('should return null when charA = "ㅗ" and charB = "ㅓ"', (): void => {
            assert.equal(phoneme.assembleVowels('ㅗ', 'ㅓ'), null);
        });
        it('should return null when charA = "A" and charB = "ㅓ"', (): void => {
            assert.equal(phoneme.assembleVowels('A', 'ㅏ'), null);
        });
    });
});
