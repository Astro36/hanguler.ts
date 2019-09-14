export type Char = string;
export type Chars = [Char, Char, Char] | [Char, Char];
export type CharCode = number;
export type CharCodes = [CharCode, CharCode, CharCode] | [CharCode, CharCode];
export type Recipe = Char | Chars;
export type RecipeCode = CharCode | CharCodes;
