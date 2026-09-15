//  Problem - 1

const swap = (a , b) =>{
    a = a + b ;
    b = a - b ;
    a = a - b ;
    return [a , b]
}
console.log('Problem - 1 : Swap [a,b] ',swap(10 , 5))

// Problem - 2 

const isEven = (n) =>{
    if(n % 2 == 0){
        return true
    }else{
        return false
    }
}
console.log('Problem - 2 :',isEven(6))

// Problem -3 

const largest = (a , b , c) =>{
    if( a >= b && a >= c){
        return a ;
    }else if ( b >= c && b>=a) {
        return b
    }else{
        return c
    }
}
console.log('Problem - 3 : Largest number is',largest(5,10,3))

// Problem - 3

const fahrenheit = (celsius) =>{
    return (celsius * 9/5) + 32 ;
}
console.log('Problem - 4 : Celsius to Fahrenheit',fahrenheit(10))



// Problem - 5 

const checkSign = (n)=>{
    if(n > 0 ){
        return 'Positive';
    }else if (n === 0 ) {
        return 'Zero';
    }else{
        return 'negative'
    }
}
console.log('Problem - 5 : ',checkSign(0))