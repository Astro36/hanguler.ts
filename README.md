# Hanguler

> Simple Hangul Manipulating Library

**Hanguler는 [Jaemin Jo](https://github.com/e-)님의 [Hangul.js](https://github.com/e-/Hangul.js)에서 파생하여 제작되었습니다.**

## Usage

### API Documentation

See [API](https://astro36.github.io/Hanguler/index.html)

### Example

예사소리를 된소리로 바꿔줍니다:

```javascript
const Hangul = require('hanguler');

const stronger = (str) => {
  switch(str) {
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

const input = '아버지가 방에 들어가신다';
const output = Hangul.flatAssemble(Hangul.flatDisassemble(input).map(stronger));

console.log(output); // 아뻐찌까 빵에 뜰어까씬따
```

## License

```text
Hanguler
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
along with this program.  If not, see <http://www.gnu.org/licenses/>.
```

Hanguler is licensed under the [GPL 3.0](./LICENSE).

[Hangul.js](https://github.com/e-/Hangul.js) is licensed under a [MIT License](https://github.com/e-/Hangul.js/blob/master/LICENSE) by Jaemin Jo.
