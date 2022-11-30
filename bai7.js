let readline = require('readline-sync');
let n = Number(readline.question('nhap n: '));
let tong = 0;

for (let i = 1; i <= n; i++){
    if (n % i == 0 && i != n){
        tong = tong + i;
    }

}
if (tong == n){console.log('co')}
else{console.log('khong')};
  

