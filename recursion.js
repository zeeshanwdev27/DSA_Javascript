// Question 1:

/*
let num = 10


let first = 0
let second = 1


process.stdout.write(first + " " + second + " ");


for(let i=1; i<= num-2; i++){

    let third = first + second
    first = second
    second = third

    process.stdout.write(third + " ");
    
}


//  Result Q1: 0 1 1 2 3 5 8 13 21 34 




// Question 2:
/*
function fiboNTerms ( n, first, second ){

    if(n === 0) return
    let third = first + second
    process.stdout.write(third+" ")
    fiboNTerms(n-1, second, third)

}


let n = 10
process.stdout.write(0+ " " + 1 + " ")
fiboNTerms(n-2, 0, 1)

*/
// Result of Q2 : 0 1 1 2 3 5 8 13 21 34 




// Question 3:

function fibo(n){
    if(n===0 || n===1) return n
    return fibo(n-1) + fibo(n-2)
}


let n = 7
console.log(fibo(n));


// Result of Q3 : 13