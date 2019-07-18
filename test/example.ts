import assert from 'assert';

import * as Hanguler from '../src';

describe('Hanguler Example', (): void => {
    describe('README 예제', (): void => {
        it('예사소리를 된소리로 바꿔줍니다.', () => {
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
