function dem(s, c) {
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === c) {
            count++;
        }
    }
    console.log(count);                     
}
let str = prompt("Nhập vào một chuỗi:");
let a = prompt("Nhập vào một ký tự:");
dem(str, a);
