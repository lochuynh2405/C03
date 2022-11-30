let readline = require('readline-sync');
let m = Number(readline.question('nhap so m: '));
let n = Number(readline.question('nhap so n: '));

for(let i = 0;i < m ; ++i){
     
    let line = ""
  
    for(let j = 0; j < n ; ++j)
        if(i == 0 || i ==  m - 1 || j == 0|| j== n - 1) line += " * ";
        else {line += "   "}
    console.log(line);
}