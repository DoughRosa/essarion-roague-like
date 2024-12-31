"use client"

import { useAppDispatch, useAppSelector } from '../Store/hooks';
import GameBackground from '../Components/GameArea/GameBackground';

export default function CharacterSelectionPage() {
  const dispatch = useAppDispatch();
  
  const playerCharacter = useAppSelector((state) => state.rootReducers.character);

  return (
    <GameBackground>
      <div className={playerCharacter.playerCharacter?.name}>
        <p>{playerCharacter.playerCharacter?.text}</p>
      </div>
    </GameBackground>
  );
};
