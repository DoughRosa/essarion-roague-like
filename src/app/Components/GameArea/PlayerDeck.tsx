interface PlayerDeckProps {
    children: React.ReactNode
}

function PlayerDeck({children}: PlayerDeckProps){


    return(
        <div className="playerHand"
        style={{
            backgroundColor: 'gray',
            height: '15vh',
            width: '6vw',
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