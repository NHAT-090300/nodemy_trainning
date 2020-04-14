//link 1

var cars = {
    hangXe: 'BMW',
    xuatXu: 'duc',
    gia: '3000000',
}
console.log(cars);
//bai 2
let crush = {
    ten: 'thao',
    chieuCao: '1m7',
    canNang: '50kg'
}
console.log(crush);
//bai 3
crush.mauDa = 'trang';
crush.tuoi = 18;
crush.ten = 'tuan';

console.log(crush);


//link 2
let array = [1,5,7,8,9,15,8];
let arr = [];
for(i=0; i<array.length; i++){
    arr[i] = array[i]*2;
}
console.log(arr);

//in ra so le
let arr1 = "";
console.log("so le")
for(i=0; i<array.length; i++){
    if(array[i] % 2 == 1){
        arr1 += array[i] + " ";
    } else {
        continue;
    }
}
console.log(arr1);


// in so chan
let arr2 = "";
console.log("so chan");
for(i=0; i<array.length; i++){
    if(array[i] % 2 != 1){
        arr2 += array[i]  + " ";
    } else {
        continue;
    }
}
console.log(arr2);

//in ra so lon hon 5;
console.log("so lon hon hoac bang 5");
let  arr3 = "";
for(i=0; i<array.length; i++){
    if( array[i] >= 5 ){
        arr3 += array[i] + " ";
    }
}
console.log(arr3);


// cong tong cac so co chia het cho 5 ko
console.log('cong ton cac so co chia het cho 5 ko');
let s = 0;
for(i=0; i<array.length; i++){
    s += array[i];
}
if( s % 5 === 0 ){
    console.log('true');
}else{
    console.log('false');
}

// tinh tich ba so dau cua mang array;
console.log("tinh tich ba so dau cua mang array;");
let tich = 1;
if(array.length < 3){
    console.log("khong the tinh");
} else {
    for(i = 0; i < 3; i++){
        tich*= array[i];
    }
    console.log(tich);
}

// kiem tra co so 5 ko;
console.log("kiem tra co so 5 khong");
let kt = 0;
for(i = 0; i < array.length; i++){
    if(array[i] == 5){
        kt += 1;
    } else {
        kt += 0;
    }
}
if(kt > 0 ){
    console.log('co so 5'); 
}

// tim phan tu bang 8 dau tien trong mang;
console.log("tim phan tu bang 8 dau tien trong mang");
for(i = 0; i < array.length; i++){
    if(array[i] == 8 ) {
        console.log('8');
        break;
    }
}

// Đếm số phần tử =8 trong mảng;
console.log("Đếm số phần tử =8 trong mảng;");
let dem = 0;
for(i = 0; i < array.length; i++){
    if(array[i] == 8 ) {
        dem += 1;
    }
}
console.log(dem);

// Tính tích cách số khác số 8 trong mảng
console.log('Tính tích cách số khác số 8 trong mảng');
let tich_8 = 1;
for(i = 0; i < array.length; i++){
    if(array[i] == 8 ) {
        tich_8 *= 8;
    }
}
console.log(tich_8);

//Tính tổng 3 phần tử cuối của mảng
console.log('Tính tổng 3 phần tử cuối của mảng');
let tong = 0;
for(i = array.length - 3; i < array.length; i++){
    tong += array[i];
}
console.log(tong);


//bai 2
let obj1 = {
	firstName: 'đỗ',
	lastName: 'hao'
}
let obj = {
	firstName: 'đỗ',
	lastName: 'hao',
	name: 'Họ của tôi là '+ obj1.firstName + ' còn tên của là ' + obj1.lastName
}
console.log(obj);
