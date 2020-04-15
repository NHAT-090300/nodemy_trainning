// call back : truyền một function vào function khác dưới 1 đối số.

function add(sum) {
    console.log('day la ket qua cua hai so : ' + sum);
}

function number(number1, number2, callback) {
    var sum = number1 +number2;
    callback(sum);
}
number(1, 2, add);


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

// bài 2
var promise1 = new Promise((resolve, reject) => {
    // setTimeout(resolve,3000, "promise" + 1)
    setTimeout( () => {
        var s = 1;
        console.log(s);
        resolve(s);
    }, 3000)

})

var promise2 = new Promise((resolve, reject) => {
    // setTimeout(resolve, 2000, "promise" + 2)
    setTimeout( () => {
        var s2 = 2;
        console.log(s2);
        resolve(s2);
    }, 2000)

})

var promise3 = new Promise((resolve, reject) => {
    // setTimeout(reject, 2000, "promise" + 3)
    setTimeout( () => {
        var s3 = 3;
        console.log(s3);
        reject(s3);
    }, 2000)

})

Promise.all([promise1, promise2 , promise3])
    .then((result) => { console.log(result)})
    .catch(err => console.log(err + ' was err'));

Promise.all([promise1, promise2])
    .then((result) => { console.log(result)})
    .catch(err => console.log(err + ' was err'));
// bài 3

// var promise4 = new Promise((resolve, reject) => {
//     var s = 1 + 1;
//     resolve (s);
// }).then((result) => {
//     setTimeout(() => {
//         console.log(result)
//     }, 3000)
//     return result * 3;
// }).then((result) => { 
//     setTimeout(()=> {
//         console.log(result)
//     }, 3000)
//     return result;
// }).then((result)=> { 
//     result > 10 ? console.log('true') : console.log('false');
// })


