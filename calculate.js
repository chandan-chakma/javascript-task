function disCountMoney(quantity){
    const fist100Price=100;
    const second100Price=90;
    const above200Price=70;
    if(quantity<=100){
        var total=quantity*100;
        return total;

    }
    else if(quantity<=200){
        var fist100toatal= 100*fist100Price;
        var ramaing=quantity-100;
        var remaningToatal=ramaing*second100Price;
        var total=fist100toatal+remaningToatal;
        return total;
    
    }
    else{
        var fist100=100*fist100Price;
        var second100=100*second100Price;
        var remaning=quantity-200;
        var remaningToatal=remaning*above200Price;
        var total=remaningToatal+second100+fist100;
        return total;

    }

}
const total=disCountMoney(105)
console.log(total)