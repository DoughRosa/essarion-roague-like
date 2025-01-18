import { useAppDispatch, useAppSelector } from "@/app/Store/hooks";
import CardInterface from "@/app/Interfaces/CardInterface";
import { setPlayerDeck } from "@/app/Store/models/gameSlice";
import allCards from "../Cards/AllCards";
import { v4 as uuidv4} from 'uuid';

export function MerchantModal() {
  const playerDeck = useAppSelector(
    (state) => state.rootReducers.game.playerDeck
  );

  const dispatch = useAppDispatch();

  const handleClick = (cardId: string) => {
    const selectedCard = allCards.find((card) => card.id === cardId);

    if(selectedCard){
      const newCard = { ...selectedCard, id: uuidv4() };
      const newDeck = [...playerDeck, newCard];

      dispatch(setPlayerDeck(newDeck));

      window.open("/path", "_self");
    }
  }

  return (
    <div
      className="playerDeck"
      style={{
        backgroundColor: "gray",
        display: "grid",
        width: "60vw",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        justifyItems: "center",
        gap: "1vh",
        padding: "1vh",
        borderRadius: "1vw",
        position: "absolute",
        zIndex: "999",
      }}
    >
      {allCards
        .filter((card) => card.rarety !== "basic")
        .sort(() => 0.5 - Math.random())
        .slice(0, 5)
        .map((card: CardInterface) => (
          <div key={card.id}>
            <div
              onClick={() => handleClick(card.id)}
              className="cardInDeck"
              style={{
                position: "relative",
                width: "7vw",
                height: "20.5vh",
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "white",
                textShadow: "1px 1px 2px black",
                fontFamily: "Arial, sans-serif",
                cursor: "pointer",
                transition: "transform 0.5s ease-in-out",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  borderRadius: "50%",
                  width: "1.6vw",
                  height: "4vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "3vh",
                  fontWeight: "bold",
                  textShadow:
                    "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black",
                }}
              >
                {card.cost}
              </div>

              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  padding: "1vw",
                  top: "11vh",
                  borderRadius: "5px",
                  textAlign: "center",
                  fontSize: "12px",
                  marginTop: "0.3vh",
                }}
              >
                {card.text}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
