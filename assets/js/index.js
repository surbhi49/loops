//entered number table.

let number = prompt("enter a number")
for (let i=1;i<=10;i++){
console.log(`${number} * ${i} = ${number*i}`)
}
//99 - 0 print value

for(let i=99; i>=0; i--){
console.log(i)
}
//0-99 print value
for(let i=0; i<=99; i++ ){
    console.log(i)
}
//print even 1-100 
for (let i=1; i<=100; i++) {
    
     if (i % 2 === 0) {
            console.log(`${i}   is even`);   
    }
   
}
//odd 1-100

for (let i=1; i<=100; i++) {
    
    if (i % 2 != 0) {
           console.log(`${i}   is odd`);   
   }
  
}

//5 get factorial of entered number

 var factorial = prompt(' enter a number to print factorial');
let b=1
for (i = 0; i<= factorial; i++){
    b = b * (factorial - i);
    console.log(b)
}


//sum till entered
 let sum=prompt('enter number')
 for(let i=1; i<=sum; i++){
     console.log(i)
 }
