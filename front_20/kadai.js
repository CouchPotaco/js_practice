//fron20-1
// // Vueオブジェクトの新たなインスタンスの初期値
// let initApp = {
//   el:'#app',          // 関連付けるDOM要素
//   data : {            // データ
//     msg:'おはよう'
//   }
// };

// // Vueオブジェクトの新たなインスタンスを生成
// let app = new Vue(initApp);

//fron20-2
//複数データがある場合
// let app = new Vue({
//   el: '#app',             // 関連付けるDOM要素
//   data: {                 // 複数のデータ
//     msg1: 'おはよう',
//     msg2: 'いい天気ですね？'
//   }
// });

//fron20-3
// Vueオブジェクトの生成
// let app = new Vue({
//   el: '#app',             // 関連付けるDOM要素
//   data: {                 // 複数のデータ
//     msg1: 'おはよう',
//     msg2: 'いい天気ですね？'
//   },
//   methods: {                  // methodオブジェクト以下にメソッドを定義する
//     msgChange: function () {  // 「onclick」が発生したとき
//       // データを変更する
//       this.msg1 = 'こんばんわ';
//       this.msg2 = 'お元気ですか？';
//     }
//   }
// });

//fron20-4
// Vueコンポーネントの定義
Vue.component(
  'msg-comp',           // タグ名
  {
    template: 'おはよう'  // タグの内容
  }
)

let app = new Vue({
  el: '#app',          // 関連付けるDOM要素
});