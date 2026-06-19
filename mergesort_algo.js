// MergeSort is Powerful then binarySearch

//Part 1
function conquor(arr, first, mid, last){

    let temp = new Array(last - first + 1) 
    let i = first    
    let j = mid + 1  
    let k = 0



    while( i<=mid && j<=last ){
        if( arr[i] < arr[j] ){
            temp[k++] = arr[i++]
        }else{
            temp[k++] = arr[j++]
        }
    }
    
    
    while( i<=mid ){
        temp[k++] = arr[i++]
    }
    while( j<=last ){
        temp[k++] = arr[j++]
    }

    let p=0, t=first;
    while(p<temp.length){
        arr[t++] = temp[p++]
    }


}



// Part 2
function divider( arr, first, last ){
    if( first >= last ) return
    let mid = Math.floor((first+last)/2)
    divider( arr, first, mid )
    divider( arr, mid+1, last )
    conquor( arr, first, mid, last )
}



let arr= [8,2,1,9,5,12,4,20]
divider(arr, 0, arr.length - 1)
console.log(arr);