"use client";

import { useDispatch } from "react-redux";
import TryAgainButton from "../Components/GameArea/Buttons/TryAgain";
import { setPlayerHand } from "../Store/models/gameSlice";
import { useEffect } from "react";
import { setCharacterEnergy, setCharacterPower, setCharacterShield } from "../Store/models/characterSlice";

export default function CharacterSelectionPage() {
  const dispatch = useDispatch();

      useEffect(() => {
        dispatch(setPlayerHand([]));
        dispatch(setCharacterEnergy(3));
        dispatch(setCharacterPower(0));
        dispatch(setCharacterShield(0));
      }, [dispatch]);
      
      
  return (
    <div
      className="gameBackground"
      style={{
        backgroundImage: `url('/Background/Background.png')`,
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <TryAgainButton
        label="Descansar"
        action={() => {
          window.open("/path", "_self");
        }}
      />
      <TryAgainButton
        label="Remover uma carta"
        action={() => {
          window.open("/path", "_self");
        }}
      />
    </div>
  );
}
