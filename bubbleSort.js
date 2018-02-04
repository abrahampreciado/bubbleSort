//***Implementing bubbleSort***
var bubbleSort = function(array){

    //while wall > 0
    var wall = array.length;

    // iterate through array up to wall
    while (wall >= 0){
        // if next value < current, swap
        for(var i = 0; i < wall; i++){
            if(array[i] > array[i + 1]){
                array = swap(array, i, i + 1);
            }
        }

        wall--;
    }

    return array;
};

function swap(arr, i1, i2){
    
    // only works with integer elements
    arr[i1] = arr[i1]^arr[i2];
    arr[i2] = arr[i1]^arr[i2];
    arr[i1] = arr[i1]^arr[i2];

    return arr;
}


unsortedArray = [10, 4, 8, 1, 3, 2, 6, 5, 9, 7];

console.log(bubbleSort(unsortedArray));

