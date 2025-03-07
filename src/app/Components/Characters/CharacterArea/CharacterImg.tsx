import { useAppSelector } from "@/app/Store/hooks";
import { Image } from "@nextui-org/react";
import HealthBar from "./HealthBar";
import React from "react";

export default function CharacterImg() {
  const isFlashing = useAppSelector((state) => state.rootReducers.character.isFlashing);
  const playerCharacter = useAppSelector((state) => state.rootReducers.character.playerCharacter);
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  }
  
  return (
    <div
    style={{
      position: "relative",
      display: 'flex',
      flexDirection: 'column',
      margin: '2vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Image
        alt="Picture of the selected character"
        className={`object-cover ${isFlashing ? "image-flash-red" : ""}`}
        src={playerCharacter?.img}
        width={250}
        onDragOver={handleDragOver}
        style={{
          borderRadius: "10px",
          border: `solid 0.5vh black`,
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      />
      <HealthBar/>
    </div>
  );
}