function groupAnimals(animals) {
    var hewan = [];
    var index = 0;
    animals.sort();
    for(var i = 0; i < animals.length; i ++) {
        if(hewan.length === 0) {
            hewan.push([animals[i]]);
        } else if(hewan[index][0][0] === animals[i][0]) {
            hewan[index].push(animals[i]);
        } else {
            hewan.push([animals[i]]);
            index ++;
        }
    }
    return hewan
}
  
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

console.log(groupAnimals(['jerapah', 'angsa', 'kambing', 'kerbau', 'kancil', 'ular', 'harimau', 'kambing']));
console.log(groupAnimals(['banteng spanyol', 'lumba-lumba', 'macan tutul', 'kambing gunung', 'gajah sumatra', 'rubah ekor 9', 'gorila harambe', 'rusa jepang', 'kukang madagaskar']));