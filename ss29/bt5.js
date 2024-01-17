function tim(a, s) {
    let result = [];
    for(let i = 0; i < a.length; i++) {
        if(a[i]==s) {
            result.push(a[i]);
        }
    }
    console.log(result);
}
let arr = ["EM CHÀO THẦY AN", "NAY EM LƯỜI LÀM BÀI","EM MUỐN ĐI NGỦ"];
let str = prompt("Nhập vào một chuỗi:");
tim(arr, str);
