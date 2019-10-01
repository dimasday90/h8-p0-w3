function pasanganTerbesar(num) {
    var arrNum = num.toString().split('');
    var hasil = [];
    for(i = 0; i < arrNum.length; i ++) {
        hasil[i] = Number(arrNum[i] + arrNum[i + 1]);
    }
    var angkaTerbesar = hasil[0];
    for(j = 1; j < hasil.length; j ++) {
        if(hasil[j] > angkaTerbesar) {
            angkaTerbesar = hasil[j];
        }
    }
    return angkaTerbesar
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

console.log(pasanganTerbesar(9889213)); 
console.log(pasanganTerbesar(8180818)); 
console.log(pasanganTerbesar(999888)); 