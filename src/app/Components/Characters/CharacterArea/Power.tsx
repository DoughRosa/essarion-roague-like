import { useAppSelector } from "@/app/Store/hooks";

export default function Power() {

  const { characterPower } = useAppSelector((state) => state.rootReducers.character);

  return (
      <div className="power"
      style={{
        backgroundImage: "url('/Background/Power.png')",
        backgroundSize: "cover",
        color: "white",
        textShadow: "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black",
        fontFamily: "Arial, sans-serif",
        position: 'absolute',
        top: '55vh',
        left: '27vw',
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
        {characterPower}
      </div>
  );
}