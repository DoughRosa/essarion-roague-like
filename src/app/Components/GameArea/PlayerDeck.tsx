import { useAppSelector } from "@/app/Store/hooks";

interface PlayerDeckProps {
    children: React.ReactNode
}

function PlayerDeck({children}: PlayerDeckProps){
    const playerDeck = useAppSelector((state) => state.rootReducers.game.playerDeck);

    return(
        <div className="playerHand"
        style={{
            backgroundImage: playerDeck.length > 0 ? "url('/Cards/CardBack.png')" : "",
            backgroundSize: "cover",
            border: "solid 0.5vh",
            borderRadius: "1vh",
            width: "7vw",
            height: "20vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: '4vh',
            left: '4vw',
        }}>
            {children}
        </div>
    )
}

export default PlayerDeck;