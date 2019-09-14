import assert from 'assert';

import * as Hanguler from '../src';

describe('Hanguler Example', (): void => {
  describe('라이브러리 예제', () => {
    it('음운을 조합하여 반환합니다.', () => {
      const input = [
        ['ㅂ', 'ㅣ'],
        ['ㄷ', 'ㅜ', 'ㄹ'],
        ['ㄱ', 'ㅣ'],
        ['ㅇ', 'ㅑ'],
        ' ',
        ['ㅁ', 'ㅓ', 'ㄱ'],
        ['ㅈ', 'ㅏ'],
        '9',
        '9',
        '9',
      ];
      const output = '비둘기야 먹자999';
      assert.equal(Hanguler.assemble(input as Hanguler.Recipe[]), output);
    });

    it('음절을 분해하여 반환합니다.', () => {
      const input = '빵상 깨랑까랑';
      const output = [
        ['ㅃ', 'ㅏ', 'ㅇ'],
        ['ㅅ', 'ㅏ', 'ㅇ'],
        ' ',
        ['ㄲ', 'ㅐ'],
        ['ㄹ', 'ㅏ', 'ㅇ'],
        ['ㄲ', 'ㅏ'],
        ['ㄹ', 'ㅏ', 'ㅇ'],
      ];
      assert.deepEqual(Hanguler.disassemble(input), output);
    });

    it('음운을 조합하여 반환합니다.', () => {
      const input = [
        'ㅁ', 'ㅏ', 'ㅂ', 'ㅓ', 'ㅂ', 'ㅇ', 'ㅡ', 'ㅣ', ' ',
        'ㅅ', 'ㅗ', 'ㄹ', 'ㅏ', 'ㄱ', 'ㅗ', 'ㄷ', 'ㅗ', 'ㅇ',
      ];
      const output = '마법의 소라고동';
      assert.equal(Hanguler.flatAssemble(input), output);
    });

    it('음절을 분해하여 반환합니다.', () => {
      const input = '너 때문에 흥이 다 깨져버렸으니까 책임져';
      const output = ['ㄴ', 'ㅓ', ' ', 'ㄸ', 'ㅐ', 'ㅁ', 'ㅜ', 'ㄴ', 'ㅇ', 'ㅔ', ' ',
        'ㅎ', 'ㅡ', 'ㅇ', 'ㅇ', 'ㅣ', ' ', 'ㄷ', 'ㅏ', ' ',
        'ㄲ', 'ㅐ', 'ㅈ', 'ㅕ', 'ㅂ', 'ㅓ', 'ㄹ', 'ㅕ', 'ㅆ', 'ㅇ', 'ㅡ', 'ㄴ', 'ㅣ', 'ㄲ', 'ㅏ', ' ',
        'ㅊ', 'ㅐ', 'ㄱ', 'ㅇ', 'ㅣ', 'ㅁ', 'ㅈ', 'ㅕ',
      ];
      assert.deepEqual(Hanguler.flatDisassemble(input), output);
    });
  });

  describe('README 예제', (): void => {
    it('예사소리를 된소리로 바꿔줍니다.', (): void => {
      const stronger = (str: Hanguler.Char): Hanguler.Char => {
        switch (str) {
          case 'ㄱ':
            return 'ㄲ';
          case 'ㄷ':
            return 'ㄸ';
          case 'ㅂ':
            return 'ㅃ';
          case 'ㅅ':
            return 'ㅆ';
          case 'ㅈ':
            return 'ㅉ';
          default:
            return str;
        }
      };
      const input = '쉬프트키가 안 빠져요ㅠㅠ';
      const output = Hanguler.flatAssemble(Hanguler.flatDisassemble(input).map(stronger));
      assert.equal(output, '쒸프트키까 안 빠쪄요ㅠㅠ');
    });
  });
});
