import { useAppSelector } from "@/app/Store/hooks";

interface PlayerGraveProps {
    children: React.ReactNode
}

function PlayerGrave({children}: PlayerGraveProps){
    const playerGrave = useAppSelector((state) => state.rootReducers.game.playerGrave);

    return(
        <div className="playerHand"
        style={{
            backgroundImage: "url('/Cards/Grave.GIF')",
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
            right: '4vw',
        }}>
            {children}
        </div>
    )
}

export default PlayerGrave;
