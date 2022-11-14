//front13

// 大分類
let cate1 = [
  '---', // 未選択
  '家具',
  'ベッド・マットレス',
  '収納家具・収納グッズ',
  '子ども家具',
  '調理器具'
];

// 大分類のselectをid属性により取得
let cate1Element = document.getElementById('mainMenu');

// 大分類のoptionを追加する関数
function setMainMenu() {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate1Element.innerHTML = '';

    // 大分類の配列に保存されている数だけoptionとして追加する
    // for (let i = 0; i < cate1.length; i++) {
    //     // option要素を新規に作成
    //     let option = document.createElement('option');
    //     option.value = cate1[i];    // optionの値に配列の値を代入
    //     option.text = cate1[i];     // optionの表示文字列に配列の値を代入
    //     cate1Element.appendChild(option); // select要素の子要素としてoption要素を追加        
    // }
    //for文の書き換え
    cate1.forEach(element => {
      let option = document.createElement('option');
      option.value = element;    // optionの値に配列の値を代入
      option.text = element;     // optionの表示文字列に配列の値を代入
      cate1Element.appendChild(option); // select要素の子要素としてoption要素を追加  
    });
}

// 大分類の生成
setMainMenu();
// HTMLを読み込み終わった直後に実行されるようにするなら
// window.onload=function() {
//   setMainMenu();
// }

// 小分類
let cate2 = [
  // 未選択
  ['---'],
  // 家具のカテゴリ
  ['ベッド','ソファ','棚・ラック','テーブル・椅子'],
  // ベッド・マットレスのカテゴリ
  ['ベッド','寝具','マットレス'],
  // 収納家具・収納グッズ'のカテゴリ
  ['家具・ラック','収納システム'],
  // 子ども家具
  ['子調理器具ども部屋家具','ベビー家具・ベビーグッズ'],
  //調理器具
  ['調理器具']
];

// 小分類のselectをid属性により取得
let cate2Element = document.getElementById('subMenu');

// 小分類のoptionを追加する関数
function setSubMenu(idx) {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate2Element.innerHTML = '';

    // 大分類の配列に保存されている数だけoptionとして追加する
    for (let i = 0; i < cate2[idx].length; i++) {
        // option要素を新規に作成
        let option = document.createElement('option');
        option.value = cate2[idx][i];    // optionの値に配列の値を代入
        option.text = cate2[idx][i];     // optionの表示文字列に配列の値を代入
        cate2Element.appendChild(option); // select要素の子要素としてoption要素を追加      
    }      
}

//--- イベントリスナーの定義 ---
// 大分類が選択された時のイベントリスナー
cate1Element.addEventListener('change', function(){
  // 選択されば番号を取得
  var idx = cate1Element.selectedIndex;
  // 大分類の選択に合わせて、小分類の生成
  setSubMenu(idx);
  //　小分類が選択されたときに、最初に表示される値
  viewItemList(cate2[idx][0]);
});
// 小分類の選択された時のイベントリスナー
cate2Element.addEventListener('change', function(){
  // 選択されば値を取得
  var val = cate2Element.value;
  viewItemList(val);
});

// 商品の定義
var itemList = [
  { id: '0001', name: 'ソファベッド', tags: ['ベッド', 'ソファ', '寝具'], price: [150000] },
  { id: '0002', name: 'シングルベッド', tags: ['ベッド', 'ソファ', '寝具'], price: [90000] },
  { id: '0003', name: '子ども用ベッド', tags: ['ベッド', 'ソファ', '寝具', '子ども部屋家具'], price: [70000] },
  { id: '0004', name: 'ソファ', tags: ['ソファ'], price: [250000] },
  { id: '0005', name: 'キューブボックス', tags: ['家具・ラック', '収納システム'], price: [50000] },
  { id: '0006', name: 'オープンラック', tags: ['家具・ラック', '収納システム'], price: [70000] },
  { id: '0007', name: 'コンピュータデスク', tags: ['テーブル・椅子'], price: [60000] },
  { id: '0008', name: 'サイドテーブル', tags: ['テーブル・椅子'], price: [24000] },
  { id: '0009', name: 'ダイニングテーブル', tags: ['テーブル・椅子'], price: [370000] },
  { id: '0010', name: '子ども部屋用収納', tags: ['収納システム', '子ども部屋家具'], price: [70000] },
  { id: '0011', name: 'フライパン', tags: ['調理器具'], price: [10000] },
  { id: '0012', name: 'まな板', tags: ['調理器具'], price: [10000] },
];

// 商品リストを表示する要素を取得
var itemListElement = document.getElementById('itemList');

//　商品一覧の表示
function viewItemList(tag) {
    itemListElement.innerHTML = '';
    // for (let i = 0; i < itemList.length; i++) {
    //     if (itemList[i].tags.some(t => t === tag)) {
    //         // li要素を作成
    //         let li = document.createElement('li');
    //         // テキスト情報を作成
    //         let text = document.createTextNode(itemList[i].id + ':' + itemList[i].name　+ ':' + itemList[i].price+"円");
    //         // ul要素に追加
    //         li.appendChild(text);
    //         itemListElement.appendChild(li);
    //     }
    // }
    //for文の書き換え
    for (var item in itemList ) {
      if (itemList[item].tags.some(t => t === tag)) {
        // li要素を作成
        let li = document.createElement('li');
        // テキスト情報を作成
        let text = document.createTextNode(itemList[item].id + ':' + itemList[item].name + ':' + itemList[item].price+"円");
        // ul要素に追加
        li.appendChild(text);
        itemListElement.appendChild(li);
      }  
    }
}

// 商品一覧の表示
viewItemList();