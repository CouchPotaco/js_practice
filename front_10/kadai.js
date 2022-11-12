//front10

// オブジェクトの定義
let apple = {
    color: 'red',
    weight: 320,

}
let mandarin = {
    color: 'orange',
    weight: 160,
    
}
let grape = {
    color: 'perple',
    weight: 294,
    
}

// オブジェクトを配列に保存
let fruits = [apple, mandarin, grape];
let sum = 0;
// プロパティweightを合計して出力
fruits.forEach(element => {
    //console.log(element.weight);  
    sum += element.weight;
    return sum;
});
console.log(sum);