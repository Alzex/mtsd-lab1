import { Validator } from './validator.js';
import readline from 'readline';

export class Solver {
  constructor() {
    this.params = [];
  }

  static question(question) {
    const rlInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rlInterface.question(question, (answer) => {
        resolve(answer);
        rlInterface.close();
      });
    });
  }
  async startInteractive(qId = 0) {
    const questions = [
      'a = ',
      'b = ',
      'c = ',
    ];

    for (const question of questions.slice(qId)) {
      const answer = await Solver.question(question);
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
    console.log(this.params);
  }
}