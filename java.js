// function foo(){
//     console.log("berrofe foo");
//     bar()
//     console.log("after")
// }
// foo()

// function bar(){
//     console.log("bar")
// }
// bar()

// function make_avg(a,b,c){
//     var sum=a+b+c;
//     var avg=sum/3;
//     return avg

// }
// var a= 1;
// var b=2;
// var c=3;
// console.log(make_avg(a,b,c))
// let avg = (grades / grades.length) * grades.length
// console.log(avg)
// function make_avg(L){
//     var sum=0
//     for(var i=0;i<=L.length;i++){
//         // console.log(i)
//         sum+=i
//         // console.log(sum)
//         var avg=sum/L.length
//     }
//     // return console.log(i)
//     return avg


// }
// L=[1,2,3]
// var average=make_avg(L)
// console.log(average)
// L=[1,2,3]
// for(var i=0;i<=L.length;i++){
//     console.log(i)
//         // sum+=i
//     }


// function odd_even(n){
//     if(n%2==0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
//     return n
// }
// var re=odd_even(3)
signal="yellow"
switch(signal){
    case 'red':
        console.log("you may be in danger")
        break;
    case 'yellow':
        console.log("you should stop walking or running")
        break;
    case 'green':
        console.log("you should cross the road")
        break;
}