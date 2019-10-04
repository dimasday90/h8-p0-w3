function cariMean(arr) {
    var blank = 0;
    for(i = 0; i < arr.length; i ++) {
        blank += arr[i] / arr.length
    }
    return Math.round(blank)
}

console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

console.log(cariMean([8, 8, 8,]));
console.log(cariMean([6, 5, 8, 2, 11, 23]));
console.log(cariMean([80, 70, 60, 78, 85, 90, 100]));