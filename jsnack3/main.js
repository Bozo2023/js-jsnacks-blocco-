/*Blocco 2 - snack 2
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */
let array=[];
let sum=0;
for (let i=0;i<10;i++){
    array.push(Math.floor(Math.random() * 100));
}
for(let i=0;i<array.length;i++){
    if (i%2 !==0){
        sum+=array[i];
    }
}
console.log(sum);