//front11

//1.<div id=”p1”></div>を、inputタグに変更する
let changeTag = document.getElementById('p1');
changeTag.outerHTML  = '<input type="text" value="変更後">';

//2.<div id=”p2”></div>に「テキスト文字列」というテキスト文字
let putinTxt = document.getElementById('p2');
putinTxt.innerHTML  = 'テキスト文字列';

//3.<div id=”p3”></div>のid属性の値を”p5”に変更する
let changeId = document.getElementById('p3');
changeId.id  = 'p5';
