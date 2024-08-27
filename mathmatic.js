function add(n,m){
    return n+m;
}
function substrac(n,m){
    return n-m;
}
function multi(n,m){
    return n*m;
}
function division(n,m){
    return n/m;
}


function calculator(n,m,op){
    if(typeof(n) || typeof(m)==='string'){
        return 'please provide only integer number dont put any stupid thing.'
    }
    if(op=='add'){
        const result=add(n,m);
        return result;
    }
    else if(op=='substrac'){
        const result=substrac(n,m)
        return result
    }
    else if(op=='multi'){
        const result=multi(n,m);
        return result;
    }
    else if(op=='division'){
        const result=division(n,m);
        return result
    }
    else{
        return 'other operration not allowed'
    }
}

const result=calculator('5',5,'add');
console.log(result);

// function multi(n,m){
//     return n*m;
// }
// const result=multi(5,'7')
// console.log(result)