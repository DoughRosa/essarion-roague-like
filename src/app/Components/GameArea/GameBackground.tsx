import { relative } from "path"

interface GameBackgroundProps {
    children: React.ReactNode
}

function GameBackground({children}: GameBackgroundProps){


    return(
        <div className="gameBackground"
        style={{
            backgroundImage: `url('/Background/Background.png')`,
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
        }}>
            {children}
        </div>
    )
}

export default GameBackground
