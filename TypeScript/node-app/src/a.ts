// let x : number = 20;
// x="Radha"
// console.log(x);

// let firstName: string = "Radha";

// function Greet(firstname: string){
// console.log(`heyyy ${firstName}`);
// }

// Greet(firstName);

// let a : number = 20 ;
// let b : number = 30;

// function sum (val1: number, val2:number):number{
//     return val1 + val2;
// }

// console.log(sum(5,9));

// function isLegal(age:number):boolean{
// if(age>18){
//     return true;
// }else{
//     return false;
// }
// }

// console.log(isLegal(5));


function superfunc(fn: () => void ){

    setTimeout(fn,1000);
    
}

function abc (){
    console.log("heyaa")
}
superfunc(abc);

