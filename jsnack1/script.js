/*Blocco 1 - JSnack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/
    let arr=[];
    let sum=0;
    for (let i=0;i<10;i++){
        let num=parseInt(prompt("entra un number"));
        arr.push(num);
        sum+=num;
    }
    console.log(`Le tableau est [${arr}] et la somme des 10 premiers nombres est ${sum}.`);




 
 