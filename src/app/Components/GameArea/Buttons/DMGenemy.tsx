import { useAppDispatch, useAppSelector } from "@/app/Store/hooks";
import { resetFlash, setCharacterLife, triggerFlash } from "@/app/Store/models/characterSlice";
import { setEnemyLife } from "@/app/Store/models/enemiesSlice";

function DamageEnemyButton() {
  const dispatch = useAppDispatch();
  const { enemyInScreen } = useAppSelector((state) => state.rootReducers.enemies);

  const applyDamage = (damage: number) => {
    if(enemyInScreen){
      const newLife = Math.max(enemyInScreen.currentLife - damage, 0);
      
      dispatch(setEnemyLife(newLife));
    }
  };

  return <button onClick={() => applyDamage(3)}
  style={{
    zIndex: '999'
  }}>Damage</button>;
}

export default DamageEnemyButton;
