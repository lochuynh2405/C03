let readline = require('readline-sync');
let n = Number(readline.question("Nhap n: "));
let output = "";

for(let i = 1; i <= n; i++){
    output += "Kmin " + i;
    if(i != n){
        output += ", ";
    }
    else{
        output += ".";
    }
}
console.log(output);