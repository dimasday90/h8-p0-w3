function dataHandling2(input) {
    
    var tempat = input[2];
        input.splice(2, 1, 'Provinsi ' + tempat);
        input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    console.log(input);
    
    var date = input[3].split('/');
    
    var monthName = date[1];
    switch(monthName) {
        case '01':
            console.log('Januari');
            break;
        case '02':
            console.log('Februari');
            break;
        case '03':
            console.log('Maret');
            break;
        case '04':
            console.log('April');
            break;
        case '05':
            console.log('Mei');
            break;
        case '06':
            console.log('Juni');
            break;
        case '07':
            console.log('Juli');
            break;
        case '08':
            console.log('Agustus');
            break;
        case '09':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;
        case '11':
            console.log('November');
            break;
        case '12':
            console.log('Desember');
            break;
        default:
            console.log('INVALID DATE');
    }
    
    var dateFormatDown = date.sort(function (a, b) {b -a})
    console.log(dateFormatDown);
    
    var dateJoin = date.join('-');
    console.log(dateJoin);
    
    var inputName = input[1];
    var nameLimit = inputName.slice(0, 15);
    console.log(inputName);
    
}

dataHandling2(["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"])


