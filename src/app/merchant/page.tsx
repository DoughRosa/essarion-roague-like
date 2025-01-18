"use client";

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
import { MerchantModal } from "../Components/Modals/MerchantModal";

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
        label="Recuperar 5 de vida"
        action={() => {
          dispatch(setCharacterLife(characterLife + 5));
          window.open("/path", "_self");
        }}
      />
      <RestButtons
        label="Add uma carta no deck"
        action={() => {
          setModalOpen(true);
        }}
      />
      {isModalOpen && <MerchantModal />}
    </div>
  );
}
