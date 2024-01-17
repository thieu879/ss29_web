let arr=[1,3,1,4,5,2,4,1,3];
let count = {};
let only;
for(let i=0;i<arr.length;i++){
    if (count[arr[i]]) {
        count[arr[i]]++;
    } else {
        count[arr[i]] = 1;
    }
}
for(let j in count){
    if(count[j] === 1){
        only = j;
        break;
    }
}
console.log(only);
