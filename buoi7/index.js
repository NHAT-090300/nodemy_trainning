//sự khác nhau giửa ++i  i++
/*
++i
+ tăng lên môt đơn vị rồi mới in ra i;

i++
+ in ra i rồi mới tăng thêm lên một đơn vị;
*/



let add = (a, b) => {
    return s = a + b;
}
add(2, 3)
console.log(s);

console.log('cách 1');
let add2 = (s, c) => {
    return s2 = s + c;
}
add2(s, 5);
console.log(s2);

console.log('cách 2')
console.log(add2(add(2, 3),5) );
/* 
map, filter, reduce
*/
let order = [3,5,6,10]

//tạo về mảng mới
var arr = order.map( (value, index, array)=> {
    return value*5;
    // return value > 5 => mảng true false;
})

//filter chỉ lặp qua ko tạo mảng mới
var arr1 = order.filter( (value, index, array)=> {
    return value > 5;
    // return value*2 => mảng cũ;
})
console.log(arr)
console.log(arr1)

// ví dụ với object

var obj = [
    {name : "nhat", tuoi:15 },
    {name : "ha", tuoi:5 },
    {name : "vu", tuoi:17 }
]



// Object.assign( {}, ten obj) tạo ra obj mơi, nếu ko có {} giống như obj cũ;

var obj2 = {
    name: 'nhat',
    tuoi: 19
};

var person2 = Object.assign({}, obj2);// nó vẫn giữ nguyên giá trị cũ;
person2.name= 'tuan';
console.log(person2)
console.log(obj2)


var person3 = Object.assign(obj2);//nó thay đổi cả giá trị cũ vì ko có {};
person3.name = 'ha';
console.log(person3)
console.log(obj2)

person3.tuoi === 19 ? console.log('tuoi của bạn la 19') : console.log('tuoi của ban ko phải là 19');  