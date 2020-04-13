let array = [1,5,7,8,9,15,8];


//kết quả của các phần tử array lên 2 lần kết quả sẽ là mảng sau [2,10,14,16,18,20]
console.log('tăng kết quả của các phần tử array lên 2 lần');
let multiply_2 = array.map( a => a*2)
console.log(multiply_2);


//in ra màn hình những số chẳn.
console.log('in ra màn hình những số chẵn');
let evenNumber = array.filter(a => a%2 == 0);
console.log(evenNumber);

//in ra màn hình các số lẻ
console.log('in ra màn hình những số lẻ');
let numberProbaly = array.filter(a => a%2 != 0);
console.log(numberProbaly);

//in ra các số lớn hơn 5;
console.log('in ra các số lớn hơn 5');
let more5 = array.filter(a => a > 5);
console.log(more5);

// cộng tổng các số chia hết cho 5;
console.log('cộng tổng các số chia hết cho 5');
let sum = array
    .filter(a => a%5 == 0)
    .reduce((a,b) => a+b);
console.log(sum);


//câu này em làm chưa được.
// Tìm ra tích 3 số đầu của mảng array


// tim trong aray có phần tử nào là số 5 hay không;
console.log('tìm trong array có phần tử nào là số 5 hay không');
let equal = array.map( a => a === 5)
if(equal) {
    console.log('có phần tử 5');
} else {
    console.log('không có phần tử 5');
}

//tìm phần tử 8 đầu tiên trong mảng;
console.log('tìm phần tử 8 đầu tiền trong mảng');
if (array.map(a => a !== 8)){
    var equal8 = array.filter(a => a === 8 );
    console.log(equal8[0]);
} else {
    console.log('không có phần tử 8');
}

// đếm phàn tử 8 trong mảng;
console.log('đếm phần tử 8 trong mảng');
if (array.map(a => a !== 8)){
    var equal8 = array.filter(a => a === 8 );
    console.log(equal8.length);
} else {
    console.log('không có phần tử 8');
}

// tính tích các phần tử 8 trong mảng;
console.log('tính tích các phần tử 8 trong mảng');
if (array.map(a => a !== 8)){
    var equal8 = array
        .filter(a => a === 8 )
        .reduce((a,b) => a*b);
    console.log(equal8);
} else {
    console.log('không có phần tử 8');
}



//câu này em chưa làm đc
//tính tổng ba phần tử cuối trong mảng;
