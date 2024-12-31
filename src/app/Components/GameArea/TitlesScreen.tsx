function TitleScreen(){

    return(
        <div className="gameBackground"
        style={{
            backgroundImage: `url('/Background/TitleScreen.png')`,
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
        }}>
        </div>
    )
}

export default TitleScreen;