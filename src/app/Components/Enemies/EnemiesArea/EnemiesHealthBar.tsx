import { useAppSelector } from "@/app/Store/hooks";

export default function EnemiesHealthBar() {

    const { enemyMaxLife, enemyLife } = useAppSelector((state) => state.rootReducers.enemies);

    const calculateWidth = () => {
        return (enemyLife / enemyMaxLife) * 100;
    };

  return (
      <div className="fullEnemyBar"
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
            backgroundColor: 'purple',
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
            {enemyLife}/{enemyMaxLife}
          </div>
        </div>
      </div>
  );
}