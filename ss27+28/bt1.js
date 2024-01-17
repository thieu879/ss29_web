let arr=[1,2,3,4,5,6,7,8,9];
let max=arr[0];
let min=arr[0];
for(let i = 1;i<arr.length;i++){
    min > arr[i]? min = arr[i] : min;
    max < arr[i]?max=arr[i]:max;
}
console.log(max,min);


let arr1=[1,2,3,4,5,6,7,8,9];
let max1=Math.max(...arr1);
let min1=Math.min(...arr1);
console.log(max1);
console.log(min1);
