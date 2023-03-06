import { Solver } from './src/solver.js';

const solver = new Solver();

if (process.argv.length < 3) {
  process.stdout.write('No arguments provided. Starting interactive mode.\n');
  solver.startInteractive();
} else {
  solver.startFile();
}