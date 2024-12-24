import { useAppSelector } from "@/app/Store/hooks";
import CardComponent from "../Cards/CardComponent";

function PlayerHand(){
    const playerHand = useAppSelector((state) => state.rootReducers.game.playerHand);

    return(
        <div className="playerHand"
        style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            height: '26vh',
            width: '70vw',
            display: 'flex',
            gap: '1vh',
            padding: '1vh',
            borderRadius: '1vw',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: '0vw'
        }}>
            {playerHand.map((card) => (
                <CardComponent card={card} key={card.id}></CardComponent>
            ))}
        </div>
    )
}

export default PlayerHand;
