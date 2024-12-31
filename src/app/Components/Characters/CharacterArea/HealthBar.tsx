import { useAppSelector } from "@/app/Store/hooks";

export default function HealthBar() {

  const { playerCharacter, characterLife, characterMaxLife } = useAppSelector((state) => state.rootReducers.character);

    const calculateWidth = () => {
      if(playerCharacter){
        return (characterLife / characterMaxLife) * 100;
      }
    };

  return (
      <div className="fullBar"
      style={{
        position: 'relative',
        backgroundColor: 'gray',
        height: '2vh',
        width: '13vw',
        margin: '2vh',
        borderRadius: '1vh',
        overflow: 'hidden'
      }}>
        <div 
        style={{
            width: `${calculateWidth()}%`,
            backgroundColor: 'lightgreen',
            height: '100%',
            borderRadius: '1vh',
            transition: 'width 0.3s ease',
        }}>
          <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bolder',
            fontSize: '2.3vh',
            height: '2vh',
            width: '13vw',
          }}>
            {characterLife} / { characterMaxLife }
          </div>
        </div>
      </div>
  );
}