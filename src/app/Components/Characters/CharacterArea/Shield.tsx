import { useAppSelector } from "@/app/Store/hooks";

export default function Shield() {

  const { characterShield } = useAppSelector((state) => state.rootReducers.character);

  return (
      <div className="shield"
      style={{
        backgroundImage: "url('/Background/Shield.png')",
        backgroundSize: "cover",
        color: "white",
        textShadow: "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black",
        fontFamily: "Arial, sans-serif",
        position: 'absolute',
        top: '55vh',
        left: '39vw',
        zIndex: '999',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        height: '8vh',
        width: '8vh',
        borderRadius: '100%',
        fontWeight: 'bolder',
        fontSize: '3vh'
      }}>
        {characterShield}
      </div>
  );
}