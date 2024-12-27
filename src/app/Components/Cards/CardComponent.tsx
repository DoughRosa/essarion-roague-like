import CardInterface from "@/app/Interfaces/CardInterface";
import React, { useState } from "react";

interface CardProps {
    card: CardInterface;
    index: number;
}

let activeCard: HTMLElement | null = null;

function grabCard(e: React.MouseEvent) {
  const element = e.target as HTMLElement;

  if(element.className === "cardInHand"){
  
    const x = e.clientX - 320;
    const y = e.clientY - 680;

    element.style.position = "absolute";
    element.style.zIndex = "999";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    activeCard = element
  }
}

function moveCard(e: React.MouseEvent) {
  if(activeCard){
    
    const x = e.clientX - 320;
    const y = e.clientY - 680;


    activeCard.style.position = "absolute";
    activeCard.style.zIndex = "999";
    activeCard.style.left = `${x}px`;
    activeCard.style.top = `${y}px`;
  }
}

function dropCard(e: React.MouseEvent) {
  activeCard = null;
}

export default function CardComponent({card, index}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

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
      onMouseDown={grabCard}
      onMouseMove={moveCard}
      onMouseUp={dropCard}
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