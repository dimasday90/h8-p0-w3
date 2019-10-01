function hitungJumlahKata(kalimat) {
    var arrKalimat = kalimat.split(' ');
    var jumlahKata = arrKalimat.length;
    return jumlahKata
}

console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

console.log(hitungJumlahKata('You are already great'));
console.log(hitungJumlahKata('Coding is like gaming'));
console.log(hitungJumlahKata('No matter how hard the challenges are, we can surpass them'));