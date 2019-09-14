import assert from 'assert';

import * as utils from '../src/utils';

describe('module:utils', (): void => {
  describe('toChar()', (): void => {
    it('should return "ㄱ" when code = 12593', (): void => assert.equal(utils.toChar(12593), 'ㄱ'));
    it('should return "1" when code = 49', (): void => assert.equal(utils.toChar(49), '1'));
    it('should return "A" when code = 65', (): void => assert.equal(utils.toChar(65), 'A'));
  });
  describe('toCharArray()', (): void => {
    it('should return ["ㄱ", "1", "A"] when char = [12593, 49, 65]', (): void => assert.deepEqual(utils.toCharArray([12593, 49, 65]), ['ㄱ', '1', 'A']));
  });
  describe('toCharCode()', (): void => {
    it('should return 12593 when char = "ㄱ"', (): void => assert.equal(utils.toCharCode('ㄱ'), 12593));
    it('should return 49 when char = "1"', (): void => assert.equal(utils.toCharCode('1'), 49));
    it('should return 65 when char = "A"', (): void => assert.equal(utils.toCharCode('A'), 65));
  });
  describe('toCharCodeArray()', (): void => {
    it('should return [12593, 49, 65] when chars = ["ㄱ", "1", "A"]', (): void => assert.deepEqual(utils.toCharCodeArray(['ㄱ', '1', 'A']), [12593, 49, 65]));
  });
});
