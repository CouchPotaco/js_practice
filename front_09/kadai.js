//front09

// 1から100の配列を作成
let a = [];
for (i=1; i <= 100; i++) {
  a.push(i);
}
//console.log(a);

//3の倍数のみが入っている配列b3
let b3 = a.filter((e)=> {
    if (e % 3 == 0) {
        return true;
    } else {
        false;
    }
});
//console.log(b3); 

//5の倍数のみが入っている配列b5
let b5 = a.filter((e)=> {
    if (e % 5 == 0) {
        return true;
    } else {
        false;
    }
});
console.log(b5); 