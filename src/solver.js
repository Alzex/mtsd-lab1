import { Validator } from './validator.js';
import { Cli } from './cli.js';
import fs from 'fs';

export class Solver {
  constructor() {
    this.params = [];
  }

  solve(a, b, c) {
    console.log(`Quadratic equation: (${a})x^2 + (${b})x + (${c}) = 0`);
    const d = b * b - 4 * a * c;
    if (d < 0) {
      console.log('No real roots');
    } else if (d === 0) {
      const x = -b / (2 * a);
      console.log(`There is 1 root\nx = ${x}`);
    } else {
      const x1 = (-b + Math.sqrt(d)) / (2 * a);
      const x2 = (-b - Math.sqrt(d)) / (2 * a);
      console.log(`There are 2 roots\nx1 = ${x1}\nx2 = ${x2}`);
    }
  }
  async startInteractive(qId = 0) {
    const questions = [
      'a = ',
      'b = ',
      'c = ',
    ];

    for (const question of questions.slice(qId)) {
      const answer = await Cli.question(question);
      const value = parseFloat(answer);
      const qIndex = questions.indexOf(question);
      if (!Validator.isDecimal(value)) {
        process.stdout.write(`[ERROR] Expected a valid real number, got ${answer} instead\n`);
        return this.startInteractive(qIndex);
      } else if (qIndex === 0 && value === 0) {
        process.stdout.write('[ERROR] a cannot be 0\n');
        return this.startInteractive(qIndex);
      }
      this.params.push(value);
    }
    this.solve(...this.params);
  }

  startFile() {
    const path = process.argv[2];

    if (!Validator.isValidFile(path)) {
      process.stdout.write(`[ERROR] File ${path} does not exist\n`);
      process.exit(1);
    }

    const data = fs.readFileSync(path, 'utf8');

    if (!Validator.isValidStructure(data)) {
      process.stdout.write(`[ERROR] Invalid file structure\n`);
      process.exit(1);
    }

    const [a, b, c] = data.split(' ').map((value) => parseFloat(value));

    if (a === 0) {
      process.stdout.write('[ERROR] a cannot be 0\n');
      process.exit(1);
    }

    this.solve(a, b, c);
  }
}
