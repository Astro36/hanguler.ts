import assert from 'assert';

import * as Hanguler from '../src';

describe('Hanguler Example', (): void => {
  describe('음운 조합/분해 예제', () => {
    it('아무튼 주작임', () => {
      const input = [
        ['ㅇ', 'ㅏ'],
        ['ㅁ', 'ㅜ'],
        ['ㅌ', 'ㅡ', 'ㄴ'],
        ' ',
        ['ㅈ', 'ㅜ'],
        ['ㅈ', 'ㅏ', 'ㄱ'],
        ['ㅇ', 'ㅣ', 'ㅁ'],
      ] as Hanguler.Recipe[];
      const output = '아무튼 주작임';
      assert.equal(Hanguler.assemble(input), output);
    });

    it('비둘기야 먹자999', () => {
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
      ] as Hanguler.Recipe[];
      const output = '비둘기야 먹자999';
      assert.equal(Hanguler.assemble(input), output);
    });

    it('빵상 깨랑까랑', () => {
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

    it('이 시국에?', () => {
      const input = [
        'ㅇ', 'ㅣ', ' ', 'ㅅ', 'ㅣ', 'ㄱ', 'ㅜ', 'ㄱ', 'ㅇ', 'ㅔ', '?'
      ];
      const output = '이 시국에?';
      assert.equal(Hanguler.flatAssemble(input), output);
    });

    it('마법의 소라고동', () => {
      const input = [
        'ㅁ', 'ㅏ', 'ㅂ', 'ㅓ', 'ㅂ', 'ㅇ', 'ㅡ', 'ㅣ', ' ',
        'ㅅ', 'ㅗ', 'ㄹ', 'ㅏ', 'ㄱ', 'ㅗ', 'ㄷ', 'ㅗ', 'ㅇ',
      ];
      const output = '마법의 소라고동';
      assert.equal(Hanguler.flatAssemble(input), output);
    });

    it('너 때문에 흥이 다 깨져버렸으니까 책임져', () => {
      const input = '너 때문에 흥이 다 깨져버렸으니까 책임져';
      const output = [
        'ㄴ', 'ㅓ', ' ', 'ㄸ', 'ㅐ', 'ㅁ', 'ㅜ', 'ㄴ', 'ㅇ', 'ㅔ', ' ',
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
