"use client"

import GameBackground from "../Components/GameArea/GameBackground";
import PlayerHand from "../Components/GameArea/PlayerHand";
import PlayerCharacter from "../Components/Characters/CharacterArea/PlayerCharacter";
import EnemyArea from "../Components/Enemies/EnemiesArea/EnemyArea";
import PlayerDeck from "../Components/GameArea/PlayerDeck";
import PlayerGrave from "../Components/GameArea/PlayerGrave";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { useEffect, useState } from "react";
import { discardCardsEndOfTurn, draw1Card, draw5Cards, returnGraveToDeck } from "../Functions/GameFunctions/DeckManipulation";
import { setLadderStep, setPlayerDeck, setPlayerGrave, setPlayerHand } from "../Store/models/gameSlice";
import EndOfTurnButton from "../Components/GameArea/Buttons/EndOfTurn";
import CharacterImg from "../Components/Characters/CharacterArea/CharacterImg";
import Energy from "../Components/Characters/CharacterArea/Energy";
import Shield from "../Components/Characters/CharacterArea/Shield";
import EnemiesImg from "../Components/Enemies/EnemiesArea/EnemiesImg";
import { resetFlash, setCharacterEnergy, setCharacterLife, setCharacterPower, setCharacterShield, triggerFlash } from "../Store/models/characterSlice";
import Power from "../Components/Characters/CharacterArea/Power";

export default function Fight() {
  const dispatch = useAppDispatch();

  const {
    playerDeck,
    playerHand,
    playerGrave,
  } = useAppSelector((state) => state.rootReducers.game);

  const energy = useAppSelector((state) => state.rootReducers.character.characterMaxEnergy);
  const characterLife = useAppSelector((state) => state.rootReducers.character.characterLife);
  const enemyLife = useAppSelector((state) => state.rootReducers.enemies.currentLife);
  const playerCharacter = useAppSelector((state) => state.rootReducers.character);
  const enemyPower = useAppSelector((state) => state.rootReducers.enemies.currentPower);
  const currentLife = useAppSelector((state) => state.rootReducers.character.characterLife);
  const currentShield = useAppSelector((state) => state.rootReducers.character.characterShield);
  let ladderStep = useAppSelector((state) => state.rootReducers.game.ladderStep);
 
  useEffect(() => {    
    const { updatedDeck, newHand } = draw5Cards(playerDeck, playerHand);

    dispatch(setPlayerDeck(updatedDeck));
    dispatch(setPlayerHand(newHand));
  
 }, [dispatch])

  const handleTurnCycle = () => {
    const { updatedGrave, updatedHand } = discardCardsEndOfTurn(playerHand, playerGrave);
  
    dispatch(setPlayerHand(updatedHand));
    dispatch(setPlayerGrave(updatedGrave));

    let currentHand = updatedHand;
    let currentDeck = playerDeck;
    let currentGrave = updatedGrave;

    while(currentHand.length < 5){
      if(currentDeck.length === 0){
        const { newGrave, newDeck } = returnGraveToDeck(currentGrave, []);
        currentDeck = newDeck;
        currentGrave = newGrave;
      }  

      const { updatedDeck, updatedHand } = draw1Card(currentDeck, currentHand);
      currentDeck = updatedDeck;
      currentHand = updatedHand;
    }
    
      if(playerCharacter){
        const damage = Math.max(enemyPower - currentShield, 0);
        const newLife = Math.max(currentLife - damage, 0);
    
        dispatch(setCharacterLife(newLife));
      }
    
        dispatch(triggerFlash());
        setTimeout(() =>  dispatch(resetFlash()), 200);

    dispatch(setPlayerDeck(currentDeck));
    dispatch(setPlayerHand(currentHand));
    dispatch(setPlayerGrave(currentGrave));
    dispatch(setCharacterEnergy(energy));
    dispatch(setCharacterPower(0));
    dispatch(setCharacterShield(0))
  };

  useEffect(() => {
    if (characterLife <= 0) {
      window.open("/game-over", "_self");
    }
  }, [characterLife]);

  useEffect(() => {
    if (enemyLife <= 0){
      let newDeck = [...playerDeck, ...playerHand, ...playerGrave];

      dispatch(setPlayerDeck(newDeck));
      dispatch(setPlayerGrave([]));
      dispatch(setPlayerHand([]));
      dispatch(setCharacterEnergy(3));
      dispatch(setCharacterShield(0));
      dispatch(setCharacterPower(0));
      dispatch(setLadderStep(ladderStep + 1));

      window.open("/merchant", "_self");
    }
  }, [enemyLife]);

  return (
    <>
      <GameBackground>
        <PlayerCharacter>
          <CharacterImg></CharacterImg>
        </PlayerCharacter>
        <EnemyArea>
          <EnemiesImg />
        </EnemyArea>
        <PlayerDeck>
          <div
            style={{
              color: "whitesmoke",
              fontSize: "8vh",
              fontWeight: "bold",
              textShadow:
                "-4px -4px 0 black, 4px -4px 0 black, -4px 4px 0 black, 4px 4px 0 black",
            }}
          >
            {playerDeck.length}
          </div>
        </PlayerDeck>
        <PlayerGrave>
          <div
            style={{
              color: "whitesmoke",
              fontSize: "8vh",
              fontWeight: "bold",
              textShadow:
                "-4px -4px 0 black, 4px -4px 0 black, -4px 4px 0 black, 4px 4px 0 black",
            }}
          >
            {playerGrave.length}
          </div>
        </PlayerGrave>
        <EndOfTurnButton
          action={handleTurnCycle}
          label="End Turn"
        ></EndOfTurnButton>
        <Energy></Energy>
        <Power></Power>
        <Shield></Shield>
        <PlayerHand />
      </GameBackground>
    </>
  );
}
