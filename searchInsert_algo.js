

function searchInsert (nums, target){

    let first = 0
    let last = nums.length - 1

    while(first<=last){
        let mid = Math.floor((first + last) / 2);

        if(nums[mid] == target) return mid
        else if(nums[mid] < target) first = mid + 1
        else last = mid - 1

    }

    return first

}

let arr = [1,3,4,5]
let target = 2


console.log( searchInsert(arr,target) );