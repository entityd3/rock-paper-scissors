/**
 * Created by d3 on 1/22/16.
 */
console.log('Hello World');
console.log('Are you ready to play, Rock...Paper...SCISSORS!!!');

const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
rl.question('Okay, now its your turn. What is your move?Answer Here ->', (answer)=>{
    console.log(answer);
rl.close();
});
console.log('hi')