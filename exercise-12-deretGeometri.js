function tentukanDeretGeometri(arr) {
    var penentu = arr[1] / arr[0]
    for(var i = 0; i < arr.length - 1; i ++) {
        var penentu2 = arr[i + 1] / arr[i]
        if(penentu2 !== penentu) {
            geometri = false
        } else {
            geometri = true;
        }
    }
    return geometri
  }
  

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

console.log(tentukanDeretGeometri([3, 6, 9, 12, 15, 18]));
console.log(tentukanDeretGeometri([10, 100, 1000, 10000, 100000]));
console.log(tentukanDeretGeometri([2, 3, 5, 7, 11, 13, 17]));