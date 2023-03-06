# Quadratic Equation Solver

This is a simple quadratic equation solver. It solves quadratic equations of the form  
$ax^2+bx+c=0$, where $a \neq 0$.
## Requirements
* Node.js v12.16.1 or higher

## Installation
Just clone the repository to your local machine
```bash
git clone git@github.com:Alzex/mtsd-lab1.git
```

## Usage

To run the program, you need to have Node.js installed. Then, run the following command in the project directory:
### Interactive mode
```bash
node app.js
```
Then you will be prompted to enter the coefficients of the equation. After that, the program will output the roots of the equation.

### File mode
```bash
node app.js <path to file>
```
The program will read the coefficients from the file and output the roots of the equation.  
** Note **
The file should contain the coefficients in the following order: `a b c\n`, where `a`, `b` and `c` are the coefficients of the equation (valid integer or float values) and \n is new line symbol. The file should contain only one equation.
