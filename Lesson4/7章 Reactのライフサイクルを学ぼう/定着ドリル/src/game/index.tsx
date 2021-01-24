
import React from "react";

interface Props {
}

interface State {
  debt: number
}

export default class Index extends React.Component <Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      debt: 0
    };
  }

  componentDidUpdate(prevState: State) {
    if (prevState.debt !== this.state.debt) {
      if (this.state.debt > 100000){
        alert("注意:借入額が10万円を超えました。");
      }
    }
  }

  handleOnBuy = (): void => {
    this.setState({ debt: this.state.debt + 10000})
  };

  render() {
    const buttom_size = 100
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "5px"
       }}>
        <div>借入額:{this.state.debt}</div>
        <div style={{
        display: "flex",
        alignItems: "center",
       }}>
        <button style={{
          height: buttom_size,
          width: buttom_size,
        }}
        onClick={() => {
            this.handleOnBuy()
        }}>
          お金を借りる
        </button>
        </div>
      </div>
    );
  }
}
