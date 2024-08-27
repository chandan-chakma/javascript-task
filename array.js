// function inchTOFeet(n){

//    const feet=n/12;
//    const feetNUmber=parseInt(feet);
//    const inchNumber=n%12;
//    const result=feetNUmber+"feet"+inchNumber+"inch";



//     return result;
// }
// console.log(inchTOFeet(75))


// function odd(n){
//     let ever=[];
//     let sum=0;
 
//     for(const number of n){
       
//         if(number%2!=0){
//             // count = number.length;
//             ever.push(number);
    
//         }
//     }
//     for(const even of ever){
//         sum+=even;
        
//     }
//     const count=ever.length;
    


  
//     return [sum, count];
// }
// const nu=[1,2,3,4,5,6,7,8,9,10];
// const [sum, count]=(odd(nu));
// console.log(sum);
// const avg=sum/count;
// console.log(avg);


// n=['abul','kabul','dabyl','abul','babul','lili'];
// n=[1,2,31,2,3,4,1];

// function duplicat(array){
//     const deletedulpi=[]
//     for(const dupli of array){
//         // console.log(dupli)
//         if(deletedulpi.includes(dupli)===false){
//             deletedulpi.push(dupli);
//         }
//     }
//     return deletedulpi
// }

// const uniqe=(duplicat(n));
// console.log(uniqe);


// const min=Math.min(1,2,4,5,67,8,-190);
// console.log(min)
// const max=Math.max(1,2,4,5,67,8,-190);
// console.log(max)
// console.log(Math.PI)
// console.log(Math.abs(-5))
// console.log(Math.round(4.5))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.1))
// console.log(Math.random())

// const today=new Date();
// // console.log(today)
// const date=new Date('2023-10-19');
// console.log(date);
// // console.log(date.getDate());
// console.log(date.getMonth());


let a=5;
let b=7;
console.log(a,b)
const temp=a;
a=b;
b=temp;
console.log(a,b)