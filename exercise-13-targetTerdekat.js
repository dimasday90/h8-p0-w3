function targetTerdekat(arr) {
    var posX = 0;
    var posO = 0;
    var jarakXO = 0;
    var arrX = [];
    

    if(arr.indexOf('x') == -1) {
        return 0;
    } else {
        for(var i = 0; i < arr.length; i ++) {
            if(arr[i] === 'x') {
                posX = i;
                arrX.push(posX);
            } else if(arr[i] === 'o') {
                posO = i;
            }
            var posXTerdekat = []
            for(var j = 0; j < arrX.length; j ++) {
                jarakXO = posO - arrX[j];
                if(jarakXO < 0) {
                    jarakXO *= -1;
                    posXTerdekat.push(jarakXO);
                } else {
                    posXTerdekat.push(jarakXO);
                }
                posXTerdekat.sort(function (a, b) {return a > b})
            }
        }
        return posXTerdekat[0]
    }
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', 'o', 'x'])); 
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', 'o', 'x', 'o', '', '', 'x'])); 
console.log(targetTerdekat(['o', '', 'x', '', '', '', '', '', '', '', 'x', ''])); 