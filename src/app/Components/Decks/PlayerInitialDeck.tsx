import CardInterface from "@/app/Interfaces/CardInterface";
import { v4 as uuidv4 } from "uuid";
import allCards from "../Cards/AllCards";

const createPlayerInitialDeck = (baseCards: CardInterface[], copies: number) => {
    const deck: CardInterface[] = [];

    baseCards.forEach((baseCard) => {
        if (baseCard.id === '1' || baseCard.id === '2'){
            for(let i = 0; i < copies; i++) {
                deck.push({
                    ...baseCard,
                    id: uuidv4(),
                });
            }
        }
    });

    return deck;
};

const playerInitialDeck = createPlayerInitialDeck(allCards, 5);

export default playerInitialDeck;