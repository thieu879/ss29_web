let inputString = prompt("Nhập vào một chuỗi:");
let arr = [];
for (let i = 0; i < inputString.length; i++) {
    for (let j = i + 1; j <= inputString.length; j++) {
        arr.push(inputString.slice(i, j));
    }
}
console.log(arr);
