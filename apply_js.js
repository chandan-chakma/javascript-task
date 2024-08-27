// // // let inch=84;

// // // let feet=inch/12;
// // // console.log(feet)


// // // function inchTOFeet(n){
// // //     const feet=n/12;
// // //     return feet;

// // // }
// // // const myfeet=inchTOFeet(180);
// // // console.log(myfeet)
// // // const datafeet=inchTOFeet(130);
// // // console.log("dada",datafeet)

// // // function evenOdd(n){
// // //     if(n%2===0){
// // //         return true;
// // //     }
// // //     else{
// // //         return false;
// // //     }
// // // }
// // // var nu=evenOdd(9);
// // // console.log(nu)

// // // function leap_year(n){
// // //     if(n%4==0){
// // //         console.log(n,"leap year")
// // //     }
// // //     else{
// // //         console.log(n,"not leap year")
// // //     }
// // // }
// // // leap_year(2021)
// // // console.log(year)
// // function arraySum(n){
// //     var sum=0
// //     for(var i=0;i<n.length;i++){
// //         // sum+=i
// //         var index=i;
// //         var element=n[index];
// //         sum+=element;
// //     }
// //     return sum
// // }
// // // var n=[1,2]
// // // var result=arraySum(n)
// // // console.log(result)


// // // find odd even in arrray  

// // function getoddEven(n){
// //     var store=[];
// //     for(var i=0; i<n.length; i++){
// //         var index=i;
// //         var element=n[index];
// //         if(element % 2===1){
// //             // sum+=i
// //             store.push(element)
// //         }
// //     }
// //     // console.log(sum)
// //     return store;
// // }
// // var l=[1,2,3,4]
// // var odd=getoddEven(l);
// // console.log(odd);
// // // console.log(store)
// // var jog=arraySum(odd);
// // console.log(jog)

// // sum=0;
// // for(var i=0; i<=2;i++){
// //     sum+=i;
// // }

// // console.log(sum)

// // function sumofNu(n){
// //     sum=0;
// //     for(var i=0; i<=n;i++){
// //         sum+=i;
// //     }

// //     return sum
// // }
// // sum=sumofNu(7)
// // console.log(sum)

// // multi=1;
// // for(var i=1;i<=7; i++){
// //     multi*=i;

// // }
// // console.log(multi)


// // factorial is multiple no i will do reverse way 
// // function factorial(n){
// //     multi=1
// //     for(var i=n;i>0;i--){
// //         multi*=i;
// //         console.log(i)
// //     }
// //     return multi
// // }
// // var result=factorial(7);
// // console.log(result)

// function factorial(n){
//     multi=1
//     let i=n
    
//     while(i>0){
//         multi*=i
//         i--
//     }
//     return multi;

//     // for(var i=n;i>0;i--){
//     //     multi*=i;
//     //     console.log(i)
//     // }
//     // return multi
// }
// var result=factorial(7);
// console.log(result)


// function convertMIn(hours){
//     let min=hours*60;
//     return min
// }
// let result=convertMIn(7);
// console.log(result)

function findLeapYear(array){
    let leapYear=[]
    for(var i=0; i<array.length; i++){
        let index=i;
        let element=array[i];
        if(element%4===0){
            leapYear.push(element)

        }
       

    }
    return leapYear;
}
let L=[2023,2024,2025,2028,2030]
let result=findLeapYear(L);
console.log(result)