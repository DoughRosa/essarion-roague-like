interface EnemyAreaProps {
  children: React.ReactNode
}

function EnemyArea({children}: EnemyAreaProps){

  return(
    <div className="enemyArea"
    style={{
      height: '65vh',
      width: '50vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'end',
      position: 'absolute',
      right: '5vw',
      top: '5vh',
    }}>
      {children}
    </div>
  )
}

export default EnemyArea;