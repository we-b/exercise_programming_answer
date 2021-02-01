import React from "react";
import Switch from "../switch";
import { RoomType } from "../../interfaces/roomtype"

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left_switch: RoomType.OFF,
      right_switch: RoomType.OFF,
    };
  }

  handleLeftSwitch = () => {
    this.setState({ left_switch: RoomType.ON});
  };

  handleRightSwitch = () => {
    this.setState({ right_switch: RoomType.ON});
  };

  render() {
    const button_size = 100
    return (
      <div style={{
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        スイッチの状況
        <div style={{
        display: "flex",
      }}>
        {/* 1つ目のスイッチ */}
        <Switch
          switch={this.state.left_switch}
          handle_switch={this.handleLeftSwitch}
        />

        {/* 2つ目のスイッチ */}
        <Switch
          switch={this.state.right_switch}
          handle_switch={this.handleRightSwitch}
        />
        </div>
      </div>
    );
  }
}
