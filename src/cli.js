import readline from 'readline';

export class Cli {
  static question(question) {
    const rlInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    //he;lowes;ldasd lld aa
    return new Promise((resolve) => {
      rlInterface.question(question, (answer) => {
        resolve(answer);
        rlInterface.close();
      });
    });

  }
}
