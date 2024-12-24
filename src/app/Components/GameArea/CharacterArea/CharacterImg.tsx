import { useAppDispatch, useAppSelector } from "@/app/Store/hooks";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function CharacterImg() {
  const isFlashing = useAppSelector((state) => state.rootReducers.character.isFlashing);
  
  return (
    <div>
      <Image
        alt="Picture of the selected character"
        className={`object-cover ${isFlashing ? "image-flash-red" : ""}`}
        src="/Characters/Gil.png"
        width={250}
        style={{
          backgroundColor: 'red'
        }}
      />
    </div>
  );
}