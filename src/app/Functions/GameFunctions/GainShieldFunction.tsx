import { useDispatch } from 'react-redux';
import CardInterface from '../../Interfaces/CardInterface';
import CharacterInterface from '../../Interfaces/CharacterInterface';
import { setCharacterShield } from '../../Store/models/characterSlice';

export const gainShield = (card: CardInterface, character: CharacterInterface) => {
  const dispatch = useDispatch();

  if (!character) return;

  const newShield = character.currentShield + card.block;

  dispatch((setCharacterShield(newShield)));
};
