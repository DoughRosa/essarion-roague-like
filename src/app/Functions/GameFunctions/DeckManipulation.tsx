import PlayerDeck from "@/app/Components/GameArea/PlayerDeck";
import playerInitialDeck from "../../Components/Decks/PlayerInitialDeck";
import CardInterface from "../../Interfaces/CardInterface";
import { setPlayerDeck } from "@/app/Store/models/gameSlice";

export const deckShuffler = (deck: CardInterface[]) => {
  const shuffledDeck = [...deck];

  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  
  return shuffledDeck;
};

export const handleDeck = (playerDeck: CardInterface[]) => {
    let deck;

    if (playerDeck.length === 0) {
      deck = [
        ...playerInitialDeck,
      ];
    } else {
      deck = [...playerDeck];
    }

    return deckShuffler(deck);
};

export const draw1Card = (playerDeck: CardInterface[], playerHand: CardInterface[]) => { 
    const deck = [...playerDeck];
    const cardDrawn = deck.splice(0, 1);
    const hand = [...playerHand, ... cardDrawn];

    return { updatedDeck: deck, updatedHand: hand }
};


export const draw5Cards = (playerDeck: CardInterface[], newHand: CardInterface[]) => {
    const deck = [...playerDeck];
    const cardDrawn = deck.splice(0, 5);
    const hand = [...newHand, ... cardDrawn];

    return { updatedDeck: deck, newHand: hand };
}

export const discardCardsEndOfTurn = (playerHand: CardInterface[], playerGrave: CardInterface[]) => {
    const hand = [...playerHand];
    const discartedCards = hand.splice(0, hand.length);
    const grave = [...playerGrave, ...discartedCards];

    return { updatedHand: hand, updatedGrave: grave };
}

export const returnGraveToDeck = (playerGrave: CardInterface[], playerDeck: CardInterface[]) => {
    const grave = [...playerGrave];
    const deck = [...playerDeck];
    
    deck.push(...grave);
    grave.splice(0, grave.length);
    deck.sort(() => Math.random() - 0.5);

    return { newGrave: grave, newDeck: deck}    
}

export const putCardOnTop = () => {
    
}

export const putCardOnBottom = () => {
    
}

export const searchDeck = () => {
    
}

export const viewDeck = () => {
    
}