# nodemy_trainning
#### buổi 6 (*javascript*)
##### tìm hiểu về toán tử. các vòng lặp **for** , và các vòng lặp array **map**, **filter**, **reduct** 
- *map*: trả ra giá trị một mảng (sau khi cho chạy qua hàm), có thể là true hoặc false;
- *filter*: trả ra giá trị trong (sau khi cho chạy qua hàm);
- *reduct*: lấy 2 các phần tử trong mảng rồi thực hiện hần tới; 
##### tìm hiểu về **++i i++**, **function()**
###### tìm hiểu về **++i i++**
- *++i* : tăng lên môt đơn vị rồi mới in ra i; 
- *i++* : in ra i rồi mới tăng thêm lên một đơn vị;
###### tìm hiểu về **function**
- có 3 cách khai báo function();
    - let name = function() {};
    - function name() {};
    - let name = () => {};
#### buổi 7 và 8 (*javascript*)
######cách dùng *map* *filter* *reduct*.
#####  Object.assign( {}, ten obj) tạo ra obj mơi (nếu ko có {} giống như obj cũ);
**ví dụ**
```
var obj2 = {
    name: 'nhat',
    tuoi: 19
};

var person2 = Object.assign({}, obj2);// nó vẫn giữ nguyên giá trị cũ;
person2.name= 'tuan';
console.log(person2) // { name: 'tuan', tuoi: 19 }
console.log(obj2) // { name: 'nhat', tuoi: 19 }


var person3 = Object.assign(obj2);//nó thay đổi cả giá trị cũ vì ko có {};
person3.name = 'ha';
console.log(person3) // { name: 'ha', tuoi: 19 }
console.log(obj2) // { name: 'ha', tuoi: 19 }

person3.tuoi === 19 ? console.log('tuoi của bạn la 19') : console.log('tuoi của ban ko phải là 19');  // tuoi của bạn la 19
```
