function angkaPalindrome(num) {
  while (true) {
    num++;
    var str = String(num);
    var str2 = str.split('').reverse().join('');
    if (str === str2) {
      return Number(str);
    }
  }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

console.log(angkaPalindrome(1356));
console.log(angkaPalindrome(1500));
console.log(angkaPalindrome(2000));

