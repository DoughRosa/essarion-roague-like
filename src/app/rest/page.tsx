"use client"

import { useDispatch } from "react-redux";
import { setPlayerHand } from "../Store/models/gameSlice";
import { useEffect, useState } from "react";
import {
  setCharacterEnergy,
  setCharacterLife,
  setCharacterPower,
  setCharacterShield,
} from "../Store/models/characterSlice";
import RestButtons from "../Components/GameArea/Buttons/RestButtons";
import { useAppSelector } from "../Store/hooks";
import { DeckModal } from "../Components/Modals/DeckModal";

export default function CharacterSelectionPage() {
  const dispatch = useDispatch();
  const { characterLife } = useAppSelector(
    (state) => state.rootReducers.character
  );

  const [isModalOpen, setModalOpen] = useState(false);

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
      <RestButtons
        label="Recuperar 10 de vida"
        action={() => {
          dispatch(setCharacterLife(characterLife + 10));
          window.open("/path", "_self");
        }}
      />
      <RestButtons
        label="Remover uma carta"
        action={() => {
          setModalOpen(true);
        }}
      />
      {isModalOpen && <DeckModal/>}
    </div>
  );
}
