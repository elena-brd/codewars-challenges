function positiveSum(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            num += arr[i];
        }
    }
    return num
}

console.log(positiveSum([1, 2, 3, 4, 5]));