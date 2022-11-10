//front08

//関数名がある場合
function triangle(bottom, height){
    let area = (bottom*height)/2;
    return area;
}
console.log(triangle(10,5));

//関数名がない場合1
let triangle2 = function (bottom2, height2){
    let size = (bottom2*height2)/2;
    return size;
}
console.log(triangle2(10,5));

//関数名がない場合2
let triangle3 = (function (bottom3, height3){
    let size = (bottom3*height3)/2;
    return size;
})(10,5)
console.log(triangle3);