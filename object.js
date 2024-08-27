// // // var stydent={
// // //     id:112, 
// // //     namae:"chandadan",
// // //     class:4,
// // //     maerks:33}
// // // var mobile={
// // //     brand:"samsung",
// // //     price:220,
// // //     storat:"44ff",
// // //     cametra:"56mp"
// // // }
// // // var computer={
// // //     name:"dell",
// // //     color:"yrelloo",
// // //     price:3344,
// // //     processor:"core i7"
// // // }
// // // console.log(computer)
// // // computer.processor="AMD R3"
// // // console.log(computer)


// // var shoppingCart={
// //     books:3,
// //     sunglas: 1,
// //     mouse:2,
// //     keyboard: 5,
// //     pen:33,
// // }
// // // var penCount=shoppingCart.pen
// // // console.log(penCount)
// // // var penCount2=shoppingCart["pen"]
// // // console.log(penCount2)
// // // var properties=Object.keys(shoppingCart)
// // // var propertiesValues=Object.values(shoppingCart)
// // // console.log(properties)
// // // console.log(propertiesValues)
// // shoppingCart.mouse=33
// // var propertyName="mouse"
// // var propertyCal=shoppingCart[propertyName]
// // console.log(propertyName,propertyCal)
// // console.log(shoppingCart)



// // looop in Object 
// var shoppingCart={
//     books:3,
//     car:5,
//     pen:44,
//     mouse: 74,
//     keyboard:9,
//     shoes:4,
//     shock:6
// }
// var te=Object.entries(shoppingCart)
// console.log(te)
// console.log(shoppingCart)
// // const key=Object.keys(shoppingCart)
// // const val=Object.values(shoppingCart)
// // console.log(key)
// // console.log(val)

// // for(var i=0; i<key.length;i++){
// //     // console.log(key[i])
// //     var propertyName=key[i]
// //     // console.log(propertyName)
// //     var propertiesValues=shoppingCart[propertyName];
// //     console.log(propertiesValues,propertyName)
// // }

// // for(var i in shoppingCart){
// //     console.log(i)
// // }


// // switch usig 
// const color="";
// switch(color){
//     case 'green':
//         console.log("you are my green friend")
//         break;
//     case 'blue':
//         console.log("you are my blue friend")
//         break;
//     case 'red':
//         console.log("you are my red friend")
//         break;
//     case 'yello':
//         console.log("you are my yellow friend")
//         break;
//     default:
//         console.log("you are my fangyou")
// }
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculateMonthlySalary(employees) {
    let totalYearlySalary = 0;

    for (let employee of employees) {
        // Calculate current salary for each employee
        let currentSalary = employee.starting + (employee.experience * employee.increment);
        // Add to the total yearly salary
        totalYearlySalary += currentSalary;
    }

    // Calculate the total salary for a month
    let totalMonthlySalary = totalYearlySalary / 12;

    return totalMonthlySalary;
}

const totalMonthlySalary = calculateMonthlySalary(employees);
console.log(`Total Monthly Salary to be provided: ${totalMonthlySalary}`);
