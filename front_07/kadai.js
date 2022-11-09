//front06
let fruits = { apple:'りんご', strawberry:'いちご', grape:'ぶどう', lemon:'れもん' };

//「キー」grapeの値を出力
console.log(fruits['grape']);

//連想配列名fruitsのキーの一覧を出力
for (key in fruits) {
    console.log(key);
}

//連想配列名fruitsの全ての値を出力
for (key in fruits) {
    console.log(fruits[key]);
}