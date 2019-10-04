// dalam array
function frame(num) {
    var result = []
    for(var i = 0;i < num; i ++){
    var arrBaris = []
    for(var j = 0; j < num; j ++){
        if(i == 0 || j == (num-1) || j == 0 || i == (num-1)){
        arrBaris.push('*');
        } else {
        arrBaris.push(' ');
        }
    }
    result.push(arrBaris)
    }
    return result
}
      

// keluar dari array
// function frame(num) {
//     var result = ''
//     for(var i = 0;i < num; i ++){
//     var arrBaris = ''
//     for(var j = 0; j < num; j ++){
//         if(i == 0 || j == (num-1) || j == 0 || i == (num-1)){
//         arrBaris += '*';
//         } else {
//         arrBaris += ' ';
//         }
//     }
//     result += arrBaris + '\n'
//     }
//     return result
// }
      
console.log(frame(6))
