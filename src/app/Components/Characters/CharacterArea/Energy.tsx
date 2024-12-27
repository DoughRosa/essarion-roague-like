import { useAppSelector } from "@/app/Store/hooks";

export default function Energy() {

  const { characterMaxEnergy, characterEnergy } = useAppSelector((state) => state.rootReducers.character);

  return (
      <div className="energy"
      style={{
        position: 'absolute',
        top: '50vh',
        left: '16vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'brown',
        height: '15vh',
        width: '15vh',
        borderRadius: '100%',
        fontWeight: 'bolder',
        fontSize: '5vh'
      }}>
        {characterEnergy}/{characterMaxEnergy}
      </div>
  );
}