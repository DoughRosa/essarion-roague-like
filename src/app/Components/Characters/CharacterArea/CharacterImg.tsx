import { useAppSelector } from "@/app/Store/hooks";
import { Image } from "@nextui-org/react";
import HealthBar from "./HealthBar";

export default function CharacterImg() {
  const isFlashing = useAppSelector((state) => state.rootReducers.character.isFlashing);
  
  return (
    <div
    style={{
      position: "relative",
      display: 'flex',
      flexDirection: 'column',
      margin: '2vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Image
        alt="Picture of the selected character"
        className={`object-cover ${isFlashing ? "image-flash-red" : ""}`}
        src="/Characters/Gil.png"
        width={250}
      />
      <HealthBar/>
    </div>
  );
}