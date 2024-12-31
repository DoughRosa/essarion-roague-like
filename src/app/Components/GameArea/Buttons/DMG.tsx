import { useAppDispatch, useAppSelector } from "@/app/Store/hooks";
import { resetFlash, setCharacterLife, triggerFlash } from "@/app/Store/models/characterSlice";

function DamageButton() {
  const dispatch = useAppDispatch();
  const { playerCharacter, characterLife } = useAppSelector((state) => state.rootReducers.character);

  const applyDamage = (damage: number) => {
    if(playerCharacter){
      const newLife = Math.max(characterLife - damage, 0);

      dispatch(setCharacterLife(newLife));
    }

    dispatch(triggerFlash());
    setTimeout(() =>  dispatch(resetFlash()), 200);
  };

  return <button onClick={() => applyDamage(3)}
  style={{
    zIndex: '999'
  }}>Damage</button>;
}

export default DamageButton;
