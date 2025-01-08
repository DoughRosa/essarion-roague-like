import CardInterface from "@/app/Interfaces/CardInterface";
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/app/Store/hooks';
import { setEnemyLife, setEnemyShield } from '@/app/Store/models/enemiesSlice';
import { setCharacterEnergy, setCharacterLife, setCharacterShield } from "@/app/Store/models/characterSlice";
import PlayerHand from "../GameArea/PlayerHand";
import { setPlayerGrave, setPlayerHand } from "@/app/Store/models/gameSlice";

interface CardProps {
    card: CardInterface;
}

export default function CardComponent({ card }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const playerCharacter = useAppSelector((state) => state.rootReducers.character);
  const energy = useAppSelector((state) => state.rootReducers.character);
  const enemy = useAppSelector((state) => state.rootReducers.enemies);
  const { playerHand, playerGrave } = useAppSelector((state) => state.rootReducers.game);

  const dealDmg = (card: CardInterface) => {
    if(playerCharacter && enemy){
      const damage = Math.max(0, card.dmg + playerCharacter.characterPower - enemy.currentShield);

      if (enemy.currentShield >= damage) {
        dispatch(setEnemyShield(Math.max(0, enemy.currentShield - damage)));
        return;
      }

      const newLife = Math.max(enemy.currentLife - damage, 0);

      dispatch(setEnemyLife(newLife));
    }
  };

  const gainShield = (card: CardInterface, playerCharacter: any) => {
    if (!playerCharacter) return;

    const newShield = playerCharacter.characterShield + card.block;
    dispatch(setCharacterShield(newShield));
  };

  const discardToGrave = (card: CardInterface) => {
    const newGrave = [...playerGrave, card];

    const newHand = playerHand.filter(
      (cardInHand) => cardInHand.id !== card.id
    );

    dispatch(setPlayerGrave(newGrave));
    dispatch(setPlayerHand(newHand));
  }

  console.log(playerCharacter)
  console.log(card.block)
  console.log(playerCharacter.characterShield)

  const playCard = (card: CardInterface) => {
    if (!playerCharacter) return;

    if (card.cost > energy.characterEnergy){
        return console.log("não tenho energia");
    } else {
      dispatch(setCharacterEnergy(energy.characterEnergy-card.cost));

      switch (card.name) {
        case "Golpe":
          dealDmg(card);

          discardToGrave(card);

          break;
        case "Bloqueio":
          gainShield(card, playerCharacter);

          discardToGrave(card);
          break;
        case "Fogo Mágico":
          dealDmg(card);

          discardToGrave(card);
        case "Barreira Arcana":
          gainShield(card, playerCharacter);

          discardToGrave(card);
          break;
        case "Lâmina Dupla":
          dealDmg(card);

          dealDmg(card);

          discardToGrave(card);
          break;
        case "Muralha de Pedra":
          gainShield(card, playerCharacter);

          discardToGrave(card);
          break;
        case "Fúria do Dragão":
          dealDmg(card);

          discardToGrave(card);

          break;
        case "Escudo Divino":
          gainShield(card, playerCharacter);

          discardToGrave(card);
          break;
        case "Rajada de Flechas":
          dealDmg(card);

          discardToGrave(card);

          break;
        case "Cura Rápida":
          setCharacterLife(playerCharacter.characterLife + 5);

          discardToGrave(card);
          break;
        case "Soco Veloz":
          dealDmg(card);

          break;
        case "Espinhos Reativos":
          dealDmg(card);

          gainShield(card, playerCharacter);

          discardToGrave(card);
          break;
        case "Campo de Força":
          gainShield(card, playerCharacter);

          discardToGrave(card);
          break;
        case "Martelo do Trovão":
          dealDmg(card);

          discardToGrave(card);
          break;
        case "Chama Curativa":
          setCharacterLife(playerCharacter.characterLife + 10);

          discardToGrave(card);
          break;
        case "Explosão Arcana":
          dealDmg(card);

          discardToGrave(card);
          break;
        default:
          break;
      }
    }
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
      onClick={() => playCard(card)}
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