let readline = require('readline-sync');
let h = Number(readline.question('nhap so h: '));

for(let i = 0;i < h ; ++i){
     
    let line = ""
  
    for(let j = 0; j < i + 1 ; ++j)
        if(j == 0 || j == i || i == h - 1)
            line += " * ";
        else {line += "   "}
        
    console.log(line);
}