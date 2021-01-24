import React from "react";
import { RoomType } from "../interfaces/roomtype";

export default class Index extends React.Component { 
    render() {
    return (
    <button
    style={{
    padding: "4rem 6rem",
    fontSize: "25px",
    backgroundColor:
        this.props.selectRoom === RoomType.in_use ? "#FADBDA":"#BBB9D5"
    }}
    onClick={() => {
        this.props.handle_room&&this.props.handle_room(RoomType.in_use);
    }}
    >
        {this.props.selectRoom}
    </button>
    );
  }
}
