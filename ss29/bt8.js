function kiemTraChuoi(chuoiGoc, chuoiNhap) {
    let ketQua = true;
    for (let i = 0; i < chuoiNhap.length; i++) {
        if (chuoiGoc.indexOf(chuoiNhap[i]) === -1) {
            ketQua = false;
            break;
        }
    }
    console.log(ketQua);
}

let chuoiGoc = prompt("Nhập vào chuỗi gốc: ");
let chuoiNhap = prompt("Nhập vào chuỗi cần kiểm tra: ");
kiemTraChuoi(chuoiGoc, chuoiNhap);

