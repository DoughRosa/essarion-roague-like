import { useAppSelector } from "@/app/Store/hooks";

export default function Energy() {

  const { characterMaxEnergy, characterEnergy } = useAppSelector((state) => state.rootReducers.character);

  return (
      <div className="energy"
      style={{
        backgroundImage: "url('/Background/Energy.png')",
        backgroundSize: "cover",
        color: "white",
        textShadow: "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black",
        fontFamily: "Arial, sans-serif",
        position: 'absolute',
        top: '50vh',
        left: '16vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
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