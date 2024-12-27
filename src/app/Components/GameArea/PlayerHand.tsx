import { useAppDispatch, useAppSelector } from "@/app/Store/hooks";
import CardComponent from "../Cards/CardComponent";
import CardInterface from "@/app/Interfaces/CardInterface";
import { setPlayerHand } from "@/app/Store/models/gameSlice";
import { useEffect, useState } from "react";

function PlayerHand(){
    const playerHand = useAppSelector((state) => state.rootReducers.game.playerHand);

    const [visibleCards, setVisibleCards] = useState<CardInterface[]>([]);

    useEffect(() => {
        setVisibleCards([]);
        playerHand.forEach((card, index) => {
          setTimeout(() => {
            setVisibleCards((prev) => [...prev, card]);
          }, index * 50);
        });
      }, [playerHand]);

    return(
        <div className="playerHand"
        style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            height: "33vh",
            width: "75vw",
            display: 'flex',
            gap: '0.5vh',
            padding: '1vh',
            borderRadius: '1vw',
            justifyContent: 'center',
            alignItems: 'flex-end',
            position: 'absolute',
            bottom: '0vw',
        }}>
            {visibleCards.map((card: CardInterface, index) => (
            <div
                key={card.id}
                style={{
                    transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
                    opacity: visibleCards.includes(card) ? 1 : 0,
                  }}
              >
                <CardComponent 
                card={card} 
                key={card.id}
                index={index}
                ></CardComponent>
            </div>
            ))}
        </div>
    )
}

export default PlayerHand;
