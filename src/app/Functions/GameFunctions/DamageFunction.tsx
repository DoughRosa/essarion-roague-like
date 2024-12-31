import { useDispatch } from 'react-redux';
import CardInterface from '../../Interfaces/CardInterface';
import { updateEnemyState } from '../../Store/models/enemiesSlice';
import { EnemyState } from '../../Store/models/enemiesSlice'; 
import { useAppSelector } from '@/app/Store/hooks';

export const dealDmg = (card: CardInterface, enemy: EnemyState) => {
  const dispatch = useDispatch();
  const playerCharacter = useAppSelector((state) => state.rootReducers.character.playerCharacter)

  if (!enemy) return;

  if(playerCharacter){
    const damage = Math.max(0, card.dmg + playerCharacter?.currentPower - enemy.enemyShield);

    if(enemy.enemyShield >= damage){
  
      dispatch(updateEnemyState({ enemyId: enemy.enemyId, updates: {
        enemyShield: enemy.enemyShield - damage
      }}));
      
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
  }
};
