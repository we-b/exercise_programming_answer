import React from "react";
import { Link } from "react-router-dom";

interface Props {}
interface State {
  ProductCount: number;
}
export default class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        ProductCount: 0,
    };
  }

  componentDidMount() {
    alert("購入ページへ遷移します。");
  }

  handleOnClick = (): void => {
    this.setState({ ProductCount: this.state.ProductCount + 1 })
  };

  componentWillUnmount() {
    alert(
      `商品を${this.state.ProductCount}個選択しました。`
    );
  }

  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <h1>TechProduct</h1>
        <h2>携帯電話</h2>
        <p>・スマートフォン</p>
        <p>{this.state.ProductCount}個選択中</p>
        <button
          onClick={() => {
              this.handleOnClick()
          }}
        >商品を1つ追加する</button>
        <Link to="/">
          <h3>トップページへ戻る</h3>
        </Link>
      </div>
    );
  }
}