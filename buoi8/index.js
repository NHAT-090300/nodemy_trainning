// call back : truyền một function vào function khác dưới 1 đối số.

function add(sum) {
    console.log('day la ket qua cua hai so : ' + sum);
}

function number(number1, number2, callback) {
    var sum = number1 +number2;
    callback(sum);
}
number(1, 2, add);

// scope : let, var, const.
/* let, var
    -scope có hai loại

    loại 1 là function scope 
        function demo() {
            function scope.
        }

    loại 2 là block scope
        ngoại trừ những trường hợp function scope
        if(){} , for(){} , while (){} ...
        + let và const phạm vi hoạt động trong block scope re ngoài ko có giá trị.
        +var thì ngược lại, trong ngoài đều dùng được.
    
    global scope (toàn bộ chương trình), local scope(chỉ chạy trong một hàm);
*/
/* const
        chỉ khai báo 1 lần, ko thể thay đổi giá trị lại lần sau.
        nếu mà là obj thì có thể thay đổi bên trong nó.
*/
// block scope
var number =  true;
if(number){
    // let number2 = 1; // không ảnh hưởng ra bên ngoài
    var number2 = 1; // ảnh hưởng ra bên ngoài
}
console.log(number2)

//function scope
function sum( a, b) {
    var sum1 = a + b;
    let sum2 = a - b;
    // cả var và let chỉ được dùng trong function.
}
sum(1,2);



// hoisting : dùng trước khai báo sau.
var number = 0;
add();
function add() {
    number++;
}
console.log(number);



// event loop : nodejs là simples thread (đơn luồng). c++ multi thread (đa luồng). 
/*
    thằng nodejs mượn nhân của c++ dể chạy.

*/
/*
console.log('1');
setInterval(function() {
    console.log('2');
}, 1000);
console.log('3');

console.log('1');
setTimeout(function() {
    console.log('2');
}, 1000);
console.log('3');
*/

console.log(' câu a');
console.log('1');
setTimeout(function() {
    console.log('2');
}, 2000);
console.log('3');
setTimeout(function() {
    console.log('4');
}, 1000);


console.log('câu b');
console.log('1');
setTimeout(function() {
    console.log('2');
}, 2000);
console.log('3');
console.log('4');


console.log('câu c');
console.log('1');
console.log('3');
c2();
c1();
function c1(){
    console.log('2');
};
function c2(){
    console.log('4');
};

console.log('câu d');
d1();
console.log('1');
function d1(){
    console.log('2');
}
setTimeout(function(){
    console.log('3');
},1000)
console.log('4');



console.log('câu e');
e1();
console.log('1')
function e1(){
    console.log('2')
};
setTimeout(function() {
    console.log('3');
    console.log('4');
}, 1000);


console.log('câu f');
f1();
console.log('1');
function f1(){
    console.log('2')
}
setTimeout(function() {
    console.log('3');
    console.log('4');
}, 2000);


/*tạo 1 promise 1 trả về resolve là 5
tạo 1 promise 2 tăng giá trị trị lên 2 lần rồi trả về cho promise 3;
promise 3 kiểm tra xem kết quả của promise 2 có chia hết cho 2 không
rồi in ra thông báo*/


// bai 1
let promise = new Promise((resolve, reject) => {
    // reject(5);
    resolve(5);
}).then((result) => {
    console.log( result );
    return result * 2;
}).then((result) => {
    console.log( result );
    return result;
}).then((result) => {
    result % 5 === 0 ? console.log('chia het cho 5') : console.log('khong chia het cho 5');
}).catch((err) => {
    console.log( 'err' );
})