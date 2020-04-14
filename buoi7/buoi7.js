let array = [1,5,7,8,9,15];

console.log('in re các số chẵn');
let arr1 = array.filter( a => a % 2 == 0);
console.log(arr1)


console.log('in ra các số lẻ');
let arr2 = array.filter( a => a%2 !== 0);
console.log(arr2);

console.log('in ra các số lớn hơn hoặc bằng 5');
let arr3 = array.filter( a => a >= 5);
console.log(arr3);

console.log('in ra các số chia hết cho 5');
let arr4 = array.filter( a => a % 5 === 0);
console.log(arr4);

console.log('tìm các số lớn hơn 5 tăng các số lên 1 đơn vị');
let arr5 = array
    .filter( a => a > 5)
    .map( a => a + 1);
console.log(arr5);

let doan = {
    name: 'Doan',
    age: 22,
    salary: 10000
}
var trung = Object.assign({}, doan);
trung.name = 'trung'

console.log(trung)

console.log('đoàn có bằng trung hay ko')
console.log(doan === trung)