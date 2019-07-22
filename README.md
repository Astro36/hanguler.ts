# Hanguler

> Simple Hangul Manipulating Library

[![npm](https://img.shields.io/npm/v/hanguler.svg?style=flat-square)](https://www.npmjs.com/package/hanguler) [![npm](https://img.shields.io/npm/dt/hanguler.svg?style=flat-square)](https://www.npmjs.com/package/hanguler)

## ChangeLog

See [CHANGELOG](./CHANGELOG.md)

## Features

See [API](https://astro36.github.io/hanguler.ts/index.html)

## Installation

- Install with npm:

```bash
npm install hanguler --save
```

- Clone the repo:

```bash
git clone https://github.com/Astro36/hanguler.ts.git
```

## Usage

### API Documentation

See [API](https://astro36.github.io/hanguler.ts/index.html)

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
Copyright (c) 2019 Seungjae Park

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

Hanguler is licensed under the [MIT License](./LICENSE).
