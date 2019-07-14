/* Hanguler
Copyright (C) 2018  Seungjae Park

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>. */

const assert = require('assert');

const Hanguler = require('../lib');

describe('Hanguler', () => {
  describe('#assemble()', () => {
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
      assert.equal(Hanguler.assemble(input), output);
    });
  });

  describe('#disassemble()', () => {
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
  });

  describe('#endsWithConsonant()', () => {
    it('str이 자음으로 끝나는지 확인합니다.', () => {
      assert.equal(Hanguler.endsWithConsonant('수소'), false);
      assert.equal(Hanguler.endsWithConsonant('헬륨'), true);
    });
  });

  describe('#equals()', () => {
    it('strA와 strB의 음운이 같은지 확인합니다.', () => {
      assert.equal(Hanguler.equals('흑ㅠ', '흐규'), true);
    });
  });

  describe('#flatAssemble()', () => {
    it('음운을 조합하여 반환합니다.', () => {
      const input = [
        'ㅁ', 'ㅏ', 'ㅂ', 'ㅓ', 'ㅂ', 'ㅇ', 'ㅡ', 'ㅣ', ' ',
        'ㅅ', 'ㅗ', 'ㄹ', 'ㅏ', 'ㄱ', 'ㅗ', 'ㄷ', 'ㅗ', 'ㅇ',
      ];
      const output = '마법의 소라고동';
      assert.equal(Hanguler.flatAssemble(input), output);
    });
  });

  describe('#flatDisassemble()', () => {
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

  describe('#includes()', () => {
    it('target에 search가 포함되는지 확인합니다.', () => {
      assert.equal(Hanguler.includes('달걀', '닭'), true);
    });
  });

  describe('README 예제', () => {
    it('예사소리를 된소리로 바꿔줍니다.', () => {
      const stronger = (str) => {
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
