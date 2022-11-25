//front19-01

 // Reactコンポーネントを継承して新たなコンポーネントを作成
 class MessageH1 extends React.Component {
  // コンストラクター
  constructor() {
    super();
  }

  //　出力処理
  render() {
    // Reactオブジェクトで「<h1>おはよう</h1>」という新たな要素を作成
    let newElement = React.createElement(
      "h1",       // タグ名
      null,       // props（パラメーターの集合）
      "おはよう"   // 子の値
    );
    return newElement;
  }
}

// 表示される場所の要素とコンポーネントを結び付けて表示させる
// const domContainer = document.querySelector("#app1");

// ReactDOM.render(
//   React.createElement(MessageH1),
//   domContainer
// );


//front19-02

  // Reactコンポーネントを継承して新たなコンポーネントを作成
  class OkButton extends React.Component {
    // コンストラクター
    constructor(props) {
      super(props);
      // 状態を保持するプロパティstate
      this.state = { ok : false };
    }

    //　出力処理
    render() {
      if (this.state.ok) {
        return "OKが押されました（" + this.state.ok + ")";
      }
      return React.createElement(
        "button",
        { onClick:() => this.setState({ ok : true })},
        "押してください"
      );
    }
  }

  // // 表示される場所の要素とコンポーネントを結び付けて表示させる
  // const domContainer = document.querySelector("#app");

  // // ReactDOMに出力処理を行う
  // ReactDOM.render(
  //   // ReactオブジェクトでOkButtonから新たな要素を作成
  //   React.createElement(OkButton),
  //   // 出力させたい場所のコンテナ（HTML側の要素）
  //   domContainer
  // );

  //front19-03
    // Reactコンポーネントを継承して新たなコンポーネントを作成
    class CountButton extends React.Component {
      // コンストラクター
      constructor(props) {
        super(props);
        // 状態を保持するプロパティstate
        this.state = { count : 0 };
      }
  
      //　出力処理
      render() {
        return React.createElement(
          "button",
          { onClick:() => this.setState({ count : this.state.count + 1 })},
          "カウント数：" + this.state.count
        );
      }
    }
  
    // // 表示される場所の要素とコンポーネントを結び付けて表示させる
    // const domContainer = document.querySelector("#app");
  
    // // ReactDOMに出力処理を行う
    // ReactDOM.render(
    //   // ReactオブジェクトでCountButtonから新たな要素を作成
    //   React.createElement(CountButton),
    //   // 出力させたい場所のコンテナ（HTML側の要素）
    //   domContainer
    // );

//出力処理まとめ
// 表示される場所の要素とコンポーネントを結び付けて表示させる
const domContainer1 = document.querySelector("#app1");
const domContainer2 = document.querySelector("#app2");
const domContainer3 = document.querySelector("#app3");
const domContainer4 = document.querySelector("#app4");

// ReactDOMに出力処理を行う
ReactDOM.render(
  React.createElement(MessageH1),
  domContainer1
);

ReactDOM.render(
  React.createElement(OkButton),
  domContainer2
);

ReactDOM.render(
  React.createElement(CountButton),
  domContainer3
);

ReactDOM.render(
  React.createElement(CountButton),
  domContainer4
);


//front19-課題
  // Reactコンポーネントを継承して新たなコンポーネントを作成
  class SubtrahendButton extends React.Component {
    // コンストラクター(初期化)
    constructor(props) {
      super(props);
      // 状態を保持するプロパティstate
      this.state = { count : 15 };
    }

    //　出力処理
    // render() {
    //   return React.createElement(
    //     "button",
    //     { onClick:() => this.setState({ 
    //       count : this.state.count - 1
    //     })
    //   },
    //     "カウント数：" + this.state.count
    //   );
    // }
    // render() {
    //   if(this.state.count==0) {
    //     return React.createElement(
    //       "button",
    //       { onClick:() => this.setState({ 
    //         count : 15
    //       })
    //     },
    //       "カウント数：" + this.state.count
    //     );

    //   } else {
    //     return React.createElement(
    //       "button",
    //       { onClick:() => this.setState({ 
    //         count : this.state.count - 1
    //       })
    //     },
    //       "カウント数：" + this.state.count
    //     );
    //   }      
    // }
    render() {
      return React.createElement(
        "button",
        { onClick:() => this.setState({ 
          count : this.state.count == 0 ? 15 : this.state.count - 1
        })
      },
        "カウント数：" + this.state.count
      );
    }
  }
// 表示される場所の要素とコンポーネントを結び付けて表示させる
const domContainer5 = document.querySelector("#app5");
// ReactDOMに出力処理を行う
ReactDOM.render(
  React.createElement(SubtrahendButton),
  domContainer5
);

