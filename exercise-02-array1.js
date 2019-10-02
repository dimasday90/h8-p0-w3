function balikString(str) {
    var blank = [];
    for(i = str.length - 1; i >= 0; i --) {
        blank += str[i];
        var blankArr = []
        for(j = blank.length - 1; j >= 0; j --) {
            blankArr += blank[j]
        }
    }
    return blankArr
}

console.log(balikString(['hello world!']));

console.log(balikString(['hello', 'world!', 'ready']));


