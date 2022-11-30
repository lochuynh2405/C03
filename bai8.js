let readline = require('readline-sync');
let m = Number(readline.question("nhap so m: "));
let n = Number(readline.question("nhap so n: "));

for (let i = m ; i <= n ; i++){
 if ((Math.sqrt(i)) % 1 == 0){
    console.log(i + " là số chính phương")
    break;
 }}