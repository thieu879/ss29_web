function timPhanTuDaiNhat(array) {
    let maxLength = 0;
    let phanTuDaiNhat = null;

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxLength) {
            maxLength = array[i].length;
            phanTuDaiNhat = array[i];
        }
    }
    console.log(phanTuDaiNhat);
}
let arr = ["dung lop pho","vy so nguoi","Dung"];
timPhanTuDaiNhat(arr);
