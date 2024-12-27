import { useDispatch } from 'react-redux';
import CardInterface from '../Interfaces/CardInterface';
import CharacterInterface from '../Interfaces/CharacterInterface';
import { updateEnemyState } from '../Store/models/enemiesSlice';
import { EnemyState } from '../Store/models/enemiesSlice'; 

export const dealDmg = (card: CardInterface, character: CharacterInterface, enemy: EnemyState) => {
  const dispatch = useDispatch();

  if (!enemy) return;

  const damage = Math.max(0, card.dmg + character.currentPower - enemy.enemyShield);

  if(enemy.enemyShield >= damage){
  
  dispatch(updateEnemyState({ enemyId: enemy.enemyId, updates: { enemyShield: enemy.enemyShield - damage}}));
  
  return
  }

  const newEnemyLife = Math.max(0, enemy.enemyLife - damage);

  dispatch(updateEnemyState({
    enemyId: enemy.enemyId,
    updates: {
      enemyShield: 0,
      enemyLife: newEnemyLife
    }
  }));
};
