import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import CardInterface from '../Interfaces/CardInterface';
import CharacterInterface from '../Interfaces/CharacterInterface';
import { setCharacterEnergy } from '../Store/models/characterSlice';
import { dealDmg } from './DamageFunction';

export const playGolpe = (card: CardInterface, character: CharacterInterface, enemyId: number) => {
  const dispatch = useDispatch();
  
  const enemy = useSelector((state: RootState) => state.rootReducers.enemies[enemyId]);

  if (!enemy) return;

  if(card.cost > character.currentEnergy){
    return
  } else {
    dispatch(setCharacterEnergy(character.currentEnergy-card.cost));
  } 

  dealDmg(card, character, enemy);
};