let readline = require('readline-sync');
let n = Number(readline.question('nhap n: '));
let uocso = ""
for (let i = 1; i <= n; i++){
    if (n % i == 0 && i % 2 == 0){
        
       if (i!=n){
        uocso += i+ ", ";
       }
       else {
        uocso += i+ ". ";
       }
    }
}
console.log("Cac uoc so chan cua so nguyen n la: "+ uocso);

    



