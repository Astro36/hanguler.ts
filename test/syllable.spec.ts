import assert from 'assert';

import * as syllable from '../src/syllable';

describe('module:syllable', (): void => {
    describe('isHangul()', (): void => {
        it('char이 한글인지 확인합니다.', (): void => {
            assert(syllable.isHangul('ㄱ'));
            assert(syllable.isHangul('가'));
            assert(!syllable.isHangul('1'));
            assert(!syllable.isHangul('A'));
        });
    });
    describe('isCompleteHangul()', (): void => {
        it('char이 완전한 한글인지 확인합니다.', (): void => {
            assert(!syllable.isCompleteHangul('ㄱ'));
            assert(syllable.isCompleteHangul('가'));
            assert(!syllable.isCompleteHangul('1'));
            assert(!syllable.isCompleteHangul('A'));
        });
    });
});
