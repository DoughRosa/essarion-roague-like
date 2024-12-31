import CardInterface from "@/app/Interfaces/CardInterface";
import CharacterInterface from "@/app/Interfaces/CharacterInterface";
import EnemyInterface from "@/app/Interfaces/EnemyInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  playerDeck: CardInterface[];
  playerHand: CardInterface[];
  playerGrave: CardInterface[];
  playerEarnedCard: CardInterface[];
  characterHoster: CharacterInterface[];
  enemiesHoster: EnemyInterface[];
  enemiesInScreen: EnemyInterface[];
  enemySelected: EnemyInterface | null; 
  selectedCard: CardInterface | null;
}

const initialState: GameState = {
  playerDeck: [],
  playerHand: [],
  playerGrave: [],
  playerEarnedCard: [],
  characterHoster: [],
  enemiesHoster: [],
  enemiesInScreen: [],
  enemySelected: null,
  selectedCard: null
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPlayerDeck: (state, action: PayloadAction<CardInterface[]>) => {
      state.playerDeck = action.payload;
    },
    setPlayerHand: (state, action: PayloadAction<CardInterface[]>) => {
      state.playerHand = action.payload;
    },
    setPlayerGrave: (state, action: PayloadAction<CardInterface[]>) => {
        state.playerGrave = action.payload;
    },
    setPlayerEarnedCard: (state, action: PayloadAction<CardInterface[]>) => {
        state.playerEarnedCard = action.payload;
    },
    setCharacterHoster: (state, action: PayloadAction<CharacterInterface[]>) => {
      state.characterHoster = action.payload;
    },
    setEnemiesHoster: (state, action: PayloadAction<EnemyInterface[]>) => {
        state.enemiesHoster = action.payload;
    },
    setEnemiesInScreen: (state, action: PayloadAction<EnemyInterface[]>) => {
        state.enemiesInScreen = action.payload;
    },
    setEnemySelected: (state, action: PayloadAction<EnemyInterface | null>) => {
        state.enemySelected = action.payload;
    },
    setSelectedCard: (state, action: PayloadAction<CardInterface | null>) => {
      state.selectedCard = action.payload;
    },
  },
});

export const {
  setCharacterHoster,
  setEnemiesHoster,
  setEnemiesInScreen,
  setEnemySelected,
  setPlayerDeck,
  setPlayerEarnedCard,
  setPlayerGrave,
  setPlayerHand,
  setSelectedCard,
} = gameSlice.actions;

export default gameSlice.reducer;