# Hanguler

> Simple Hangul Manipulating Library

[![npm](https://img.shields.io/npm/v/hanguler.svg?style=flat-square)](https://www.npmjs.com/package/hanguler) [![npm](https://img.shields.io/npm/dt/hanguler.svg?style=flat-square)](https://www.npmjs.com/package/hanguler)

**Hanguler는 [Jaemin Jo](https://github.com/e-)님의 [Hangul.js](https://github.com/e-/Hangul.js)에서 파생하여 제작되었습니다.**

## ChangeLog

See [CHANGELOG](./CHANGELOG.md)

## Features

See [API](https://astro36.github.io/Hanguler/index.html)

## Installation

- Install with npm:

```bash
npm install hanguler --save
```

- Clone the repo:

```bash
git clone https://github.com/Astro36/Hanguler.git
```

## Usage

### API Documentation

See [API](https://astro36.github.io/Hanguler/index.html)

### Example

예사소리를 된소리로 바꿔줍니다:

```javascript
const Hanguler = require('hanguler');

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

console.log(output); // 쒸프트키까 안 빠쪄요ㅠㅠ
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
