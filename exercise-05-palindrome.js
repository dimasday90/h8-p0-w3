// dengan method array (split, reverse, join)
// function palindrome(kata) {
//     var kata2 = kata.split('').reverse().join('')
//     if(kata == kata2) {
//         return true;
//     } else {
//         return false;
//     }
// }

// tanpa method array
function palindrome(kata) {
    var kosong = '';
    for(i = kata.length -1; i >= 0; i --) {
        kosong += kata[i]
    }
    if(kata == kosong) {
        return true;
    } else {
        return false;
    }
    
}


console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

console.log(palindrome('rusak kasur'));
console.log(palindrome('klimak'));
console.log(palindrome('kayak'));