"use client"

import GameBackground from '../Components/GameArea/GameBackground';
import Image from 'next/image';
import PathImg from '../Components/Paths/Paths';
import { useAppSelector } from '../Store/hooks';

export default function CharacterSelectionPage() {
  
  const ladderStep = useAppSelector(
    (state) => state.rootReducers.game.ladderStep
  );

  
  return (
    <GameBackground>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "100vh",
        width: "100vw"
      }}>
        <div>
          <Image src={"/Background/Path.png"}
          alt="Escolha seu caminho"
          width={800}
          height={100}/>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '5vh'
        }}>
          <PathImg/>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '5vh',
          right: '2vw',
          fontSize: '8vh',
          fontWeight: "bold",
          textShadow: "-4px -4px 0 black, 4px -4px 0 black, -4px 4px 0 black, 4px 4px 0 black",
          color: "whitesmoke"
        }}>
          {ladderStep}/10
        </div>
      </div>
    </GameBackground>
  );
};
