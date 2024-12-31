"use client"

import GameBackground from "./../Components/GameArea/GameBackground";
import PlayerHand from "./../Components/GameArea/PlayerHand";
import PlayerCharacter from "./../Components/Characters/CharacterArea/PlayerCharacter";
import EnemyArea from "./../Components/Enemies/EnemiesArea/EnemyArea";
import PlayerDeck from "./../Components/GameArea/PlayerDeck";
import PlayerGrave from "./../Components/GameArea/PlayerGrave";
import { useAppDispatch, useAppSelector } from "./../Store/hooks";
import { useEffect } from "react";
import { discardCardsEndOfTurn, draw1Card, draw5Cards, handdleDeck, returnGraveToDeck } from "./../Functions/GameFunctions/DeckManipulation";
import { setPlayerDeck, setPlayerGrave, setPlayerHand } from "./../Store/models/gameSlice";
import EndOfTurnButton from "./../Components/GameArea/Buttons/EndOfTurn";
import CharacterImg from "./../Components/Characters/CharacterArea/CharacterImg";
import DamageButton from "./../Components/GameArea/Buttons/DMG";
import Energy from "./../Components/Characters/CharacterArea/Energy";
import EnemiesImg from "./../Components/Enemies/EnemiesArea/EnemiesImg";
import CardInterface from "../Interfaces/CardInterface";

export default function Home() {
  const dispatch = useAppDispatch();

  const {
    playerDeck,
    playerHand,
    playerGrave,
    characterHoster,
    enemiesHoster,
    enemiesInScreen,
    enemySelected,
    playerEarnedCard,
    selectedCard
  } = useAppSelector((state) => state.rootReducers.game);

  //------------------INICIO DO TURNO
  useEffect(() => {
    if (playerHand.length !== 0){
        const clearHand: CardInterface[] = []
        dispatch(setPlayerHand(clearHand))
    } else {
        const { updatedDeck, newHand } = draw5Cards(playerDeck, playerHand);

        dispatch(setPlayerDeck(updatedDeck));
        dispatch(setPlayerHand(newHand));
    }
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

    dispatch(setPlayerDeck(currentDeck));
    dispatch(setPlayerHand(currentHand));
    dispatch(setPlayerGrave(currentGrave));
  };

  console.log(playerHand)

  return (
    <>
    <GameBackground>
    <DamageButton></DamageButton>
      <PlayerCharacter>
        <CharacterImg></CharacterImg>
      </PlayerCharacter>
      <EnemyArea>
        <EnemiesImg/>
      </EnemyArea>
      <PlayerDeck>
        <div
        style={{
          color: "whitesmoke",
          fontSize: "8vh",
          fontWeight: "bold",
          textShadow: "-4px -4px 0 black, 4px -4px 0 black, -4px 4px 0 black, 4px 4px 0 black",
        }}>
          {playerDeck.length}
        </div>
      </PlayerDeck>
      <PlayerGrave>
      <div
        style={{
          color: "whitesmoke",
          fontSize: "8vh",
          fontWeight: "bold",
          textShadow: "-4px -4px 0 black, 4px -4px 0 black, -4px 4px 0 black, 4px 4px 0 black",
        }}>
          {playerGrave.length}
        </div>
      </PlayerGrave>
      <EndOfTurnButton action={handleTurnCycle} label="End Turn"></EndOfTurnButton>
      <Energy></Energy>
      <PlayerHand/>
    </GameBackground>
    </>
  );
}
