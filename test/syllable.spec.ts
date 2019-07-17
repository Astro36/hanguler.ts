import assert from 'assert';

import * as syllable from '../src/syllable';

describe('module:syllable', (): void => {
    describe('isHangul()', (): void => {
        it('should return true when char = "ㄱ"', (): void => {
            assert(syllable.isHangul('ㄱ'));
        });
        it('should return true when char = "가"', (): void => {
            assert(syllable.isHangul('가'));
        });
        it('should return false when char = "1"', (): void => {
            assert(!syllable.isHangul('1'));
        });
        it('should return false when char = "A"', (): void => {
            assert(!syllable.isHangul('A'));
        });
    });
    describe('isCompleteHangul()', (): void => {
        it('should return false when char = "ㄱ"', (): void => {
            assert(!syllable.isCompleteHangul('ㄱ'));
        });
        it('should return true when char = "가"', (): void => {
            assert(syllable.isCompleteHangul('가'));
        });
        it('should return false when char = "1"', (): void => {
            assert(!syllable.isCompleteHangul('1'));
        });
        it('should return false when char = "A"', (): void => {
            assert(!syllable.isCompleteHangul('A'));
        });
    });
});
