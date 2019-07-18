import assert from 'assert';

import * as text from '../src/text';

describe('module:text', (): void => {
    describe('assemble()', (): void => {
        it('should return "흑우" when recipes = [["ㅎ", "ㅡ", "ㄱ"], ["ㅇ", "ㅜ"]]', (): void => assert.deepEqual(text.assemble([['ㅎ', 'ㅡ', 'ㄱ'], ['ㅇ', 'ㅜ']]), '흑우'));
    });
    describe('disassemble()', (): void => {
        it('should return [["ㅎ", "ㅡ", "ㄱ"], ["ㅇ", "ㅜ"]] when text = "흑우"', (): void => assert.deepEqual(text.disassemble('흑우'), [['ㅎ', 'ㅡ', 'ㄱ'], ['ㅇ', 'ㅜ']]));
    });
    describe('flatAssemble()', (): void => {
        it('should return "흑우" when chars = ["ㅎ", "ㅡ", "ㄱ", "ㅇ", "ㅜ"]', (): void => assert.deepEqual(text.flatAssemble(['ㅎ', 'ㅡ', 'ㄱ', 'ㅇ', 'ㅜ']), '흑우'));
    });
    describe('flatDisassemble()', (): void => {
        it('should return ["ㅎ", "ㅡ", "ㄱ", "ㅇ", "ㅜ"] when text = "흑우"', (): void => assert.deepEqual(text.flatDisassemble('흑우'), ['ㅎ', 'ㅡ', 'ㄱ', 'ㅇ', 'ㅜ']));
    });
    describe('equals()', (): void => {
        it('should return true when textA = "흙" and textB = "흘ㄱ"', (): void => assert(text.equals('흙', '흘ㄱ')));
    });
    describe('includes()', (): void => {
        it('should return true when target = "달걀" and search = "닭"', (): void => assert(text.includes('달걀', '닭')));
        it('should return true when target = "개구리" and search = "개굴"', (): void => assert(text.includes('개구리', '개굴')));
        it('should return true when target = "부엉이" and search = "부엉"', (): void => assert(text.includes('부엉이', '부엉')));
        it('should return true when target = "매미" and search = "맴"', (): void => assert(text.includes('매미', '맴')));
        it('should return false when target = "고양이" and search = "야옹"', (): void => assert(!text.includes('고양이', '야옹')));
    });
});
