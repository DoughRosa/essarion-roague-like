interface PlayerGraveProps {
    children: React.ReactNode
}

function PlayerGrave({children}: PlayerGraveProps){


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
            right: '4vw',
        }}>
            {children}
        </div>
    )
}

export default PlayerGrave;
