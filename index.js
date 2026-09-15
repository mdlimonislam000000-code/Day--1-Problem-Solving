//  Problem - 1

const swap = (a , b) =>{
    a = a + b ;
    b = a - b ;
    a = a - b ;
    return [a , b]
}
console.log('Problem - 1 Swap :',swap(10 , 5))

// Problem - 2 

const isEven = (n) =>{
    if(n % 2 == 0){
        return true
    }else{
        return false
    }
}
console.log('Problem - 2 ',isEven(6))