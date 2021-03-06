import assert from 'assert';

import * as syllable from '../src/syllable';

describe('module:syllable', (): void => {
  describe('assembleHanguls()', (): void => {
    it('should return "가" when recipe = ["ㄱ", "ㅏ"]', (): void => assert.equal(syllable.assembleHanguls(['ㄱ', 'ㅏ']), '가'));
    it('should return null when recipe = ["ㅄ", "ㅏ"]', (): void => assert.equal(syllable.assembleHanguls(['ㅄ', 'ㅏ']), null));
    it('should return "뙇" when recipe = ["ㄸ", "ㅘ", "ㅎ"]', (): void => assert.equal(syllable.assembleHanguls(['ㄸ', 'ㅘ', 'ㅎ']), '뙇'));
    it('should return null when recipe = ["ㄱ", "ㅏ", "ㄸ"]', (): void => assert.equal(syllable.assembleHanguls(['ㄱ', 'ㅏ', 'ㄸ']), null));
    it('should return null when recipe = ["ㄴ", "ㅇ", "ㄱ"]', (): void => assert.equal(syllable.assembleHanguls(['ㄴ', 'ㅇ', 'ㄱ']), null));
    it('should return null when recipe = ["ㅗ", "ㅜ", "ㅑ"]', (): void => assert.equal(syllable.assembleHanguls(['ㅗ', 'ㅜ', 'ㅑ']), null));
  });
  describe('disassembleHangul()', (): void => {
    it('should return ["ㄱ", "ㅏ"] when char = "가"', (): void => assert.deepEqual(syllable.disassembleHangul('가'), ['ㄱ', 'ㅏ']));
    it('should return ["ㄱ", "ㅏ", "ㄱ"] when char = "각"', (): void => assert.deepEqual(syllable.disassembleHangul('각'), ['ㄱ', 'ㅏ', 'ㄱ']));
    it('should return ["ㄸ", "ㅘ","ㅎ"] when char = "뙇"', (): void => assert.deepEqual(syllable.disassembleHangul('뙇'), ['ㄸ', 'ㅘ', 'ㅎ']));
    it('should return null when char = "ㄱ"', (): void => assert.equal(syllable.disassembleHangul('ㄱ'), null));
    it('should return null when char = "1"', (): void => assert.equal(syllable.disassembleHangul('1'), null));
  });
  describe('endsWithConsonant()', (): void => {
    it('should return false when char = "ㄱ"', (): void => assert(!syllable.endsWithConsonant('ㄱ')));
    it('should return false when char = "가"', (): void => assert(!syllable.endsWithConsonant('가')));
    it('should return true when char = "각"', (): void => assert(syllable.endsWithConsonant('각')));
    it('should return false when char = "1"', (): void => assert(!syllable.endsWithConsonant('1')));
    it('should return false when char = "A"', (): void => assert(!syllable.endsWithConsonant('A')));
  });
  describe('isHangul()', (): void => {
    it('should return true when char = "ㄱ"', (): void => assert(syllable.isHangul('ㄱ')));
    it('should return true when char = "가"', (): void => assert(syllable.isHangul('가')));
    it('should return false when char = "1"', (): void => assert(!syllable.isHangul('1')));
    it('should return false when char = "A"', (): void => assert(!syllable.isHangul('A')));
  });
  describe('isCompleteHangul()', (): void => {
    it('should return false when char = "ㄱ"', (): void => assert(!syllable.isCompleteHangul('ㄱ')));
    it('should return true when char = "가"', (): void => assert(syllable.isCompleteHangul('가')));
    it('should return false when char = "1"', (): void => assert(!syllable.isCompleteHangul('1')));
    it('should return false when char = "A"', (): void => assert(!syllable.isCompleteHangul('A')));
  });
});
