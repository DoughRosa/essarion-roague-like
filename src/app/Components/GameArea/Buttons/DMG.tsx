import { useAppDispatch, useAppSelector } from "@/app/Store/hooks";
import { resetFlash, setCharacterLife, triggerFlash } from "@/app/Store/models/characterSlice";

function DamageButton() {
  const dispatch = useAppDispatch();
  const characterLife = useAppSelector((state) => state.rootReducers.character.characterLife);

  const applyDamage = (damage: number) => {
    const newLife = Math.max(characterLife - damage, 0);
    dispatch(setCharacterLife(newLife));

    dispatch(triggerFlash());
    setTimeout(() =>  dispatch(resetFlash()), 200);
  };

  return <button onClick={() => applyDamage(3)}>Damage</button>;
}

export default DamageButton;
