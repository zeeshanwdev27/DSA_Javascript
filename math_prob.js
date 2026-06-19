/*
let a = 32
let b= 20


while( a != b ){
    if(a > b){
        a = a - b
    }else{
        b= b - a
    }
}



console.log(a, b);
*/



// Recursion Way
function gcd (a,b){

    if(a==b) return console.log(a,b);
    

    if(a>b) return gcd(a-b, b)
    return gcd(b, b-a)

}


let a = 32
let b = 20

gcd(a,b)