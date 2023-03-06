export class Validator {
  static isHex(value) {
    return /^0x[0-9a-fA-F]+$/.test(value);
  }
  static isDecimal(value) {
    return !isNaN(value) && !Validator.isHex(value);
  }
}