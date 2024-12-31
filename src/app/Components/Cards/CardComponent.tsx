import CardInterface from "@/app/Interfaces/CardInterface";
import { setSelectedCard } from "@/app/Store/models/gameSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface CardProps {
    card: CardInterface;
    index: number;
}

export default function CardComponent({card}: CardProps) {

  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleSelectedCard = (card: CardInterface) => {
    dispatch(setSelectedCard(card))
  }

  const handleDragStart = (e: React.DragEvent, card: CardInterface) => {
    e.dataTransfer.setData("cardName", card.name);
  };

  return (
    <div
      className="cardInHand"
      style={{
        position: "relative",
        width: "7vw",
        height: "20vh",
        backgroundImage: `url(${card.img})`,
        backgroundSize: "cover",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "white",
        textShadow: "1px 1px 2px black",
        fontFamily: "Arial, sans-serif",
        cursor: "grab",
        transition: "transform 0.5s ease-in-out",
        transform: `${isHovered ? "scale(1.5) translateY(-25px)" : "scale(1) translateY(0px)"}`,
        zIndex: `${isHovered ? "999" : ""}`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleSelectedCard(card)}
      onDragStart={() => handleDragStart}
      onDrag={() => handleSelectedCard(card)}
      draggable
      
    >
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          width: "1.6vw",
          height: "4vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3vh",
          fontWeight: "bold",
          textShadow: "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black",
        }}
      >
        {card.cost}
      </div>

      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          padding: "1vw",
          top: "11vh",
          borderRadius: "5px",
          textAlign: "center",
          fontSize: "12px",
          marginTop: "0.3vh"
        }}
      >
        {card.text}
      </div>
    </div>
  );
}