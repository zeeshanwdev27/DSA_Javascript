// Reduce space but takes time    (also quicksort used in array.sort bts)


// let arr = [19, 3, 17, 24, 1, 87, 22]
// first = 0
// last = arr.length-1

function findPivotIdx( arr, first, last ){

    let pivot = arr[first]  //19
    let i = first + 1       //1
    let j = last            //7

    while(i<=j){
        while(i<=last && arr[i]<=pivot) i++;
        while(j>=first && arr[j]>pivot) j--;

        if(i<j){
            swapper(arr, i, j)
        }
        
        swapper(arr, j, first)
        return j;
    }

}


function swapper( arr, i, j ){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}



function quickSort(arr, first, last){
    if(first>=last) return
    let pIdx = findPivotIdx(arr, first, last)
    quickSort(arr, first, pIdx-1)
    quickSort(arr, pIdx+1, last)
}


let arr = [19, 3, 17, 24, 1, 87, 22]
quickSort(arr, 0, arr.length - 1)


console.log(arr);