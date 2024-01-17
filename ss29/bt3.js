function countCharacters(a) {
    let s = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== ' ') {
            s++;
        }
    }
    console.log(s);
}
let str = "EM CHÀO THẦY AN!!!";
countCharacters(str);
