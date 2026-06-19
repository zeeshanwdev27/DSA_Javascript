// --------------Bubble Sort----------------

/*
const arr = [1,10,5,20,3,40,2]
const arrLength = arr.length - 1


for( let i=0; i< arrLength; i++){

    for( let j=0; j< arrLength - i; j++){
        if( arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j+1] = temp
        }
    }


}

console.log(arr);
*/



// --------------Selection Sort----------------

/*

let arr = [10, 5, 1, 12, 9];
const arrLength = arr.length;

for (let i = 0; i < arrLength - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arrLength; j++) {
        if (arr[minIndex] > arr[j]) {
            minIndex = j;
        }
    }

    if (minIndex !== i) {
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}

console.log(arr);

*/




// --------------Insertion Sort----------------

let arr = [5, 2, 4, 6, 1, 3];
const arrLength = arr.length;


for(let i=1; i<arrLength; i++){

    let current = arr[i]
    let j = i-1

    while( j >= 0     &&     arr[j] > current ){
        arr[j+1] = arr[j]
        j--
    }

    arr[j+1] = current

}


console.log(arr);
