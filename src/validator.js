import { existsSync } from 'fs';

export class Validator {
  static isHex(value) {
    return /^0x[0-9a-fA-F]+$/.test(value);
  }
  static isDecimal(value) {
    return !isNaN(value) && !Validator.isHex(value);
  }
  static isValidFile(path) {
    return existsSync(path);
  }

  static isValidStructure(data) {
    return /^-?\d+(\.\d+)?\s-?\d+(\.\d+)?\s-?\d+(\.\d+)?\n$/g.test(data);
  }
}
