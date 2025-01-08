interface EnemyInterface {
    id: number,
    name: string,
    img: string,
    initialLife: number,
    currentLife: number,
    initialShield: number,
    currentShield: number,
    initialPower: number,
    currentPower: number,
    text: '',
    value: number, 
    isEnemyFlashing: false,
    height: number,
    width: number 
}

export default EnemyInterface;