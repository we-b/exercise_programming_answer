import React from "react";
import { RoomType } from "../../interfaces/roomtype"

export default class Index extends React.Component{
  render() {
    const button_size = 100
    return (
      <div>
        <button style={{
          height: button_size,
          width: button_size,
          background: this.props.switch === RoomType.ON ? "#FADBDA":"#BBB9D5"
        }} onClick={() => {
          this.props.handle_switch&&this.props.handle_switch()
        }}>
          {this.props.switch}
        </button>
      </div>
    );
  }
}