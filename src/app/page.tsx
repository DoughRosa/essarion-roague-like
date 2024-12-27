"use client"

import GameBackground from "./Components/GameArea/GameBackground";
import PlayerHand from "./Components/GameArea/PlayerHand";
import PlayerCharacter from "./Components/Characters/CharacterArea/PlayerCharacter";
import EnemyArea from "./Components/Enemies/EnemiesArea/EnemyArea";
import PlayerDeck from "./Components/GameArea/PlayerDeck";
import PlayerGrave from "./Components/GameArea/PlayerGrave";
import { useAppDispatch, useAppSelector } from "./Store/hooks";
import { useEffect } from "react";
import { discardCardsEndOfTurn, draw1Card, draw5Cards, handdleDeck, returnGraveToDeck } from "./Functions/DeckManipulation";
import playerInitialDeck from "./Components/Decks/PlayerInitialDeck";
import { setPlayerDeck, setPlayerGrave, setPlayerHand } from "./Store/models/gameSlice";
import EndOfTurnButton from "./Components/GameArea/Buttons/EndOfTurn";
import CardInterface from "./Interfaces/CardInterface";
import CharacterImg from "./Components/Characters/CharacterArea/CharacterImg";
import HealthBar from "./Components/Characters/CharacterArea/HealthBar";
import DamageButton from "./Components/GameArea/Buttons/DMG";
import Energy from "./Components/Characters/CharacterArea/Energy";
import { Card, card } from "@nextui-org/react";
import CardComponent from "./Components/Cards/CardComponent";
import EnemiesImg from "./Components/Enemies/EnemiesArea/EnemiesImg";
import EnemiesHealthBar from "./Components/Enemies/EnemiesArea/EnemiesHealthBar";

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
    playerCharacter,
    playerEarnedCard,
    selectedCard
  } = useAppSelector((state) => state.rootReducers.game);

  //-----------INICIA O DECK E COMPRA A MAO INICIAL
  const deck = handdleDeck(playerDeck);

  useEffect(() => {
    dispatch(setPlayerDeck(deck));

    const { updatedDeck, newHand } = draw5Cards(deck, []);
    dispatch(setPlayerDeck(updatedDeck));
    dispatch(setPlayerHand(newHand));
  }, [dispatch]);

  //------------------INICIO DO TURNO
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
