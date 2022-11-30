let readline = require('readline-sync');
let n = Number(readline.question('nhap n: '));
let dem = ""
for (let i = 1; i <= n; i++){
    if (n % i == 0 && i % 2 == 1){
        
       if (i!=n){
        dem += i+ ", ";
       }
       else {
        dem += i+ ". ";
       }
    }
}
console.log("so le: "+ dem);