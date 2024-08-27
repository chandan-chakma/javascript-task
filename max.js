// // const max=Math.max(12,4,66,66);
// // console.log(max)
//  const height =[65,54,44,5,78,998]
//  function findMaxNum(n){
//     let max=n[0];
//     for(const num of n){
//         if(num <max){
//              max=num;
//         }
//         // console.log(num);
//     }
//     return max;
//  }

//  const max=findMaxNum(height);
//  console.log(max);
 

const price=[2000,3999,40000,5550]
const mobiles=[
    {
        name:"samsung",price:10,camera:"20mp",color:"black",quantity:2
    },
    {
        name:"iphone",price:20,camera:"20mp",color:"black",quantity:1
    },
    {
        name:"xaomi",price:30,camera:"20mp",color:"purple",quantity:0
    },
    {
        name:"huawei",price:40,camera:"20mp",color:"white",quantity:0
    },
    {
        name:"sony",price:50,camera:"20mp",color:"yellow",quantity:0
    },
]

// function findCheapestPhone(m){
//     // console.log(m)
//     let min=m[0];
//     for(phone of m){
//         // console.log(phone);
//         if(phone.price<min.price){
//             min=phone;
//         }
//     }
//     return min;

// }

// const cheap=findCheapestPhone(mobiles);
// console.log(cheap);

function totalshoppingPrice(n){
    let sum=0;
    for(product of n){
        const singaleproductPrice=product.price*product.quantity
        sum=sum+singaleproductPrice;
    }
    // console.log(sum)
    return sum;
}
const totalprice=totalshoppingPrice(mobiles);
console.log(totalprice);