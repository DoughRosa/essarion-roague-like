interface EnemyAreaProps {
  children: React.ReactNode
}

function EnemyArea({children}: EnemyAreaProps){

  return(
    <div className="enemyArea"
    style={{
      backgroundColor: 'red',
      height: '65vh',
      width: '25vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: '20vw',
      top: '5vh',
    }}>
      {children}
    </div>
  )
}

export default EnemyArea;