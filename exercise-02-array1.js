function balikString(str) {
    var blank = '';
    for(i = str.length - 1; i >= 0; i --) {
        blank += str[i];
    }
    return blank
}

console.log(balikString('hello world!'));

