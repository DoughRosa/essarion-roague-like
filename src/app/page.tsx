"use client"

import { useAppDispatch, useAppSelector } from './Store/hooks';
import { setCharacterImg, setCharacterLife, setPlayerCharacter } from './Store/models/characterSlice';
import CharacterInterface from './Interfaces/CharacterInterface';
import listOfCharacters from './Components/Characters/ListOfCharacters';
import Image from 'next/image';
import GameBackground from './Components/GameArea/GameBackground';
import { useState } from 'react';
import { handleDeck } from './Functions/GameFunctions/DeckManipulation';
import { setLadderStep, setPlayerDeck, setPlayerInitialDeck } from './Store/models/gameSlice';

export default function CharacterSelectionPage() {
  const dispatch = useAppDispatch();
  const [hoveredCharacter, setHoveredCharacter] = useState<number | null>(null);

  dispatch(setLadderStep(0));

  const {
      playerDeck
    } = useAppSelector((state) => state.rootReducers.game);

    const {
      characterMaxLife
    } = useAppSelector((state) => state.rootReducers.character);

  const handleSelectCharacter = (character: CharacterInterface) => {
    dispatch(setPlayerCharacter(character));
    dispatch(setCharacterImg(character.img));
    dispatch(setCharacterLife(characterMaxLife));

    const deck = handleDeck(playerDeck);
    
    dispatch(setPlayerDeck(deck));
    dispatch(setPlayerInitialDeck(deck));

    window.open("/path", "_self");
  };

  return (
    <GameBackground>
      <div style={{
        position: "absolute",
        top: "5vh"
      }}>
        <Image src={"/Background/Choose.png"}
        alt="Escolha seu herói"
        width={1000}
        height={1000}/>
      </div>
      <div className="player-hoster"
        style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            height: "33vh",
            width: "75vw",
            display: 'flex',
            gap: '0.5vh',
            padding: '1vh',
            borderRadius: '1vw',
            justifyContent: 'center',
            alignItems: 'flex-end',
            position: 'absolute',
            bottom: '0vw',
        }}> 
        {listOfCharacters.map((character) => (
          <div
            key={character.id}
            style={{
                width: "10vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "3vh",
                cursor: "pointer"
            }}
            onClick={() => handleSelectCharacter(character)}
            onMouseEnter={() => setHoveredCharacter(character.id)}
            onMouseLeave={() => setHoveredCharacter(null)}
          >
          <Image
              alt="Picture of the selectable character"
              className="character-img"
              src={character.img}
              width={250}
              height={350}
              style={{
                borderRadius: "10px",
                border: `solid 0.5vh ${hoveredCharacter === character.id ? 'lightblue' : 'black'}`,
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                transition: "border-color 0.3s ease",
              }}
          />
          </div>
        ))};    
      </div>
    </GameBackground>
  );
};
