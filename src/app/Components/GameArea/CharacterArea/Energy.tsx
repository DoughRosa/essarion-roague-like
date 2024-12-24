import { useAppSelector } from "@/app/Store/hooks";

export default function Energy() {

  const { characterMaxEnergy, characterEnergy } = useAppSelector((state) => state.rootReducers.character);

  return (
      <div className="energy"
      style={{
        position: 'absolute',
        top: '60vh',
        left: '20vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'brown',
        height: '12vh',
        width: '12vh',
        borderRadius: '100%',
        fontWeight: 'bolder',
        fontSize: '5vh'
      }}>
        {characterEnergy}/{characterMaxEnergy}
      </div>
  );
}