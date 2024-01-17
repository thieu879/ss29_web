let a = parseInt(prompt("Nhap a:"));
let b = parseInt(prompt("Nhap b"));
let arr=[];
if(a<b){
    for(let i=a+1;i<b;i++){
        arr.push(i);
    }
}else if(a>b){
    for(let i=b+1;i<a;i++){
        arr.push(i);
    }
}else{
    console.log("m dua t a!!!!");
}
console.log(arr);