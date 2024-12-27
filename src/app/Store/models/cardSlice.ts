import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardState {
  cardCost: number,
  cardText: string,
  canBePlayed: boolean
}

const initialState: CardState = {
  cardCost: 0,
  cardText: '',
  canBePlayed: true,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCardCost: (state, action: PayloadAction<number>) => {
      state.cardCost = action.payload;
    },
    setCardText: (state, action: PayloadAction<string>) => {
      state.cardText = action.payload;
    },
    setCanBePlayed: (state, action: PayloadAction<boolean>) => {
      state.canBePlayed = action.payload;
    },
  },
});

export const {
  setCardCost,
  setCardText,
  setCanBePlayed
} = cardSlice.actions;

export default cardSlice.reducer;