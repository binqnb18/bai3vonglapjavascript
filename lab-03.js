// cau c. Tìm phần tử lớn nhất, phần tử nhỏ nhất trong mảng

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let max = arr[0];
// let min = arr[0];

// for( let i = 1; i < arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i];
//     }
//     if(arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log("phan tu lon nhat la: ", max);
// console.log("phan tu nho nhat la: ", min);

//a. In ra màn hình console tất cả các phần tử của mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// for( let i = 0; i < arr.length; i++)
// console.log(arr[i]);


// cau d. Tính trung bình cộng các phần tử trong mảng

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

//e. Đảo ngược thứ tự các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// for( let i = 0; i < arr.length/2; i++) {
//     let temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
// }
// console.log("mang sau khi dao nguoc la: ", arr);

// cau f. Tìm số lần xuất hiện của mỗi phần tử trong mảng

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let counts = {};
// for( let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     if( counts[element] === undefined) {
//         counts[element] = 1;
//     } else {
//         counts[element] ++;
//     }
// }
// for(let key in counts) {
//     console.log(key + " xuat hien " + counts[key] + " lan ");
// }

//g. Chèn phần tử 117 vào đầu mảng

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let chenso = 117;
// let saukhichenso = [chenso];
// for(let i = 0; i < arr.length; i++) {
//     saukhichenso.push(arr[i]);
// }
// console.log(saukhichenso);


//h. Kiểm tra xem mảng có phải là mỗi dãy số tăng dần hay không
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let kiemtra = true;
// for( let i = 0; i < arr.length - 1; i++) {
//     if(arr[i] > arr[i + 1]){
//     kiemtra = false;
//     break;
//     }
// }
// if(kiemtra) {
//     console.log("nay la mang tang dan");
// } else {
//     console.log("nay la mang khong tang dan");
// }

// cau i. Sắp xếp mảng theo thứ tự tăng dần
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// for( let i = 0; i < arr.length - 1; i++) {
//     for(j = 0; j < arr.length - i - 1; j++) {
//         if(arr[j] > arr[j +1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log("mang sau khi tang dan la: " + arr)


//bai 2

// cau a. Tìm các cặp số có tổng bằng 10

// let arr = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14];
// let ketqua = [];
// for( let i = 0; i < arr.length - 1; i++) {
//     for(j = i + 1; j < arr.length; j++) {
//         if(arr[i] + arr[j] === 10) {
//             ketqua.push([arr[i], arr[j]]);
//         }
//     }
// }
// console.log(ketqua);

//cau b. Xoá các phần tử trùng nhau trong mảng
// let arr = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14];
// let ketqua = [];
// for(let i = 0; i < arr.length; i++) {
//     let temp = false;
//     for( let j = 0; j < i; j++) {
//         if(arr[i] === arr[j]) {
//             temp = true;
//             break;
//         }
//     }if(!temp) {
//         ketqua.push(arr[i]);
//     }
// }
// console.log(ketqua);

// cau d. Tính tổng 3 số lớn nhất trong mảng
// let arr = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14];
// let max1 = -Infinity;
// let max2 = -Infinity;
// let max3 = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > max1) {
//         max3 = max2;
//         max2 = max1;
//         max1 = arr[i];
//     } else if (arr[i] > max2) {
//         max3 = max2;
//         max2= arr[i];
//     } else if( arr[i] > max1) {
//         max1 = arr[i];
//     }
// }
// let sum = max1 + max2 + max3;
// console.log("tong 3 so lon nhat la: ", sum);


// cau e  Tính trung bình cộng 3 số lớn nhất trong mảng
// let arr = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14];
// let max1 = -Infinity;
// let max2 = -Infinity;
// let max3 = -Infinity;
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > max1) {
//         max3 = max2;
//         max2 = max1;
//         max1 = arr[i];
//     } else if ( arr[i] > max2) {
//         max3 = max2;
//         max2 = arr[i];
//     } else if(arr[i] > max1) {
//         max1 = arr[i];
//     }
//  }
//  sum = max1 + max2 + max3;
//  average = sum/3;
//  console.log("trung binh cong ba so lon nhat la: ", average);

 // cau f. Tìm độ lệch lớn nhất giữa các phần tử trong mảng (Gợi ý: max – min)
 let arr = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14];
 let max = arr[0];
 let min = arr[0];
 for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i];
    } if(arr[i] < min) {
        min = arr[i];
    }
 }
let dolech = max - min;
console.log("do lech lon nhat la: " , dolech);


