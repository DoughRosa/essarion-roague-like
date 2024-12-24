interface PlayerCharacterProps {
    children: React.ReactNode
}

function PlayerCharacter({children}: PlayerCharacterProps){

    return(
      <div className="playerCharacterArea"
      style={{
        height: '50vh',
        width: '20vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '25vw',
        top: '20vh',
      }}>
        {children}
      </div>
    )
}

export default PlayerCharacter;