//front05
for (let i = 0; i < 10; i++) {
    let s = '(' + i + '):';
    for (let j = 10; j > i; j--) {
        s = s + '*';
    }
    console.log(s);
}
