/**Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
**/
const heights2=[167,190,120,165,137];

function findLowestheight(n){
    let min=n[0];
    for(heght of n){
        // console.log(heght);
        if(heght<min){
            min=heght;
        }
    }
    return min;
}
const minHeight=findLowestheight(heights2);
console.log(minHeight);

/**Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
**/

const heights2=['rahim','robin','rafi','ron','rashed']
function findSmallesName(n){
    let smallestName=n[0];
    for(name of heights2){
        nameLenght=name.length
        // console.log(nameLenght);
        if(nameLenght<smallestName.length){
            smallestName=name;
        }
    }
    return smallestName;
}
const smallestName=findSmallesName(heights2);
console.log(smallestName);

/**Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk

    **/


const laptop=35000;
const tablet=15000;
const mobile=20000;

function calculateElectronicsBudget(l,t,m){
    let totalLaptopPrice=laptop*l;
    let totalTabletPrice=tablet*t;
    let totalMobilePrice=mobile*m;

    const totalPrice=totalLaptopPrice+totalTabletPrice+totalMobilePrice;

    return totalPrice;

}

const totalMoneyRequired=calculateElectronicsBudget(1,1,1);
console.log(totalMoneyRequired);


/**const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
]
    **/

function findAveragePhonePrice(n){
    const countmonbile=n.length;
    let sum=0
    for(mobile of n){
        sum=sum+mobile.price;
    }
    const averagePhonePrice=sum/countmonbile;
    return averagePhonePrice;
    
}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
]
const average=findAveragePhonePrice(phones);
console.log(average);

/**For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
    
        **/

function incrementSalaryEmploy(n){
    // console.log(n)
    let totalYearsalary=0;
    for(employ of n){
        // console.log(employ);
        var perEmployeIncrement=employ.starting+(employ.experience*employ.increment);
        totalYearsalary+=perEmployeIncrement
    }
    let totalMonthSalary=totalYearsalary/12;
    return totalMonthSalary;
   

}
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
const totalSalary=incrementSalaryEmploy(employees);
console.log(totalSalary);