import React, { useState } from "react";
import { CountCustomerNumber } from "../../hooks/countCustomerNumber";
import Modal from "react-modal";
import Confirmation from "../confirmation"


export default function Index() {
  const [reserveNumber, handleIncreaseReserveNumber, handleDecreaseReserveNumber] = CountCustomerNumber()
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };


  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>応募画面です</h1>
      <h2>予約人数:{reserveNumber}人</h2>
      <div style={{
        display: "flex",
      }}>
        <button style={{
          width:100,
          height:100
        }}
        
        onClick={
          handleIncreaseReserveNumber
        }
        >
          予約人数を追加する 
        </button>

        <button style={{
          width:100,
          height:100
        }}
        
        onClick={
          handleDecreaseReserveNumber
        }
        >
          予約人数を減らす
        </button>
      </div>
      <button onClick={handleOpen}>確認ボタン</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
      >
        <Confirmation></Confirmation>
      </Modal>

    </div>
  );
}
