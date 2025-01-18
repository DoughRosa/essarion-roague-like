import { useAppSelector } from "@/app/Store/hooks";
import { Image } from "@nextui-org/react";

export default function EnemiesImg() {
  const enemy = useAppSelector((state) => state.rootReducers.enemies);

  let display = '';
  
  if (enemy.currentLife === 0) {
    display = "none"
  } else {
    display = "flex"
  }

  return (
    <div
      style={{
        display: display,
        margin: "2vh",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "5vh",
      }}
    >
      <img
        src="/Background/Power.png"
        style={{
          height: "5vh",
          width: "5vh",
          position: "absolute",
          top: "14vh",
          right: "28vw",
        }}
        alt=""
      />
      <div
        style={{
          position: "absolute",
          top: "15vh",
          right: "26vw",
          color: "white",
          textShadow:
            "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black",
          fontFamily: "Arial, sans-serif",
          height: "8vh",
          width: "8vh",
          borderRadius: "100%",
          fontWeight: "bolder",
          fontSize: "2.5vh",
        }}
      >
        {enemy.currentPower}
      </div>
      <div
        key={enemy?.currentLife}
        style={{
          marginBottom: "2vh",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          <Image
            alt={`Picture of ${enemy?.img}`}
            src={`/Enemies/${enemy?.img}`}
            width={260}
            height={360}
          />
          <div
            className="fullEnemyBar"
            style={{
              position: "relative",
              backgroundColor: "gray",
              height: "2vh",
              width: `14vw`,
              borderRadius: "1vh",
              overflow: "hidden",
              marginTop: "1vh",
            }}
          >
            <div
              style={{
                width: `${
                  enemy?.currentLife && enemy.initialLife
                    ? (enemy?.currentLife / enemy?.initialLife) * 100
                    : 20
                }%`,
                backgroundColor: "#CBC3E3",
                height: "100%",
                borderRadius: "1vh",
                transition: "width 0.3s ease",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bolder",
                fontSize: "1.5vh",
              }}
            >
              {enemy?.currentLife}/{enemy?.initialLife}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}