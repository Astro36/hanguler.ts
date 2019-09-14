const Hanguler = require('../lib');

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

console.log(output);
