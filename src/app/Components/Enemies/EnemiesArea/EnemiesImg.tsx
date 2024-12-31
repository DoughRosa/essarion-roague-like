import { useAppSelector } from "@/app/Store/hooks";
import { Image } from "@nextui-org/react";
import EnemiesHealthBar from "./EnemiesHealthBar";

export default function EnemiesImg() {
  
  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      margin: '2vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Image
        alt="Pictures of the enemies"
        src="/Enemies/Esqueletico.png"
        width={150}
      />
      <EnemiesHealthBar/>
    </div>
  );
}