import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CharacterState {
  characterMaxLife: number,
  characterLife: number,
  characterMaxEnergy: number,
  characterEnergy: number,
  characterPower: number,
  characterShield: number,
  characterImg: string,
  isFlashing: boolean
}

const initialState: CharacterState = {
  characterMaxLife: 40,
  characterLife: 40,
  characterMaxEnergy: 3,
  characterEnergy: 3,
  characterPower: 0,
  characterShield: 0,
  characterImg: '',
  isFlashing: false
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacterMaxLife: (state, action: PayloadAction<number>) => {
      state.characterMaxLife = action.payload;
    },
    setCharacterLife: (state, action: PayloadAction<number>) => {
      state.characterLife = action.payload;
    },
    setCharacterMaxEnergy: (state, action: PayloadAction<number>) => {
      state.characterMaxEnergy = action.payload;
    },
    setCharacterEnergy: (state, action: PayloadAction<number>) => {
      state.characterEnergy = action.payload;
    },
    setCharacterPower: (state, action: PayloadAction<number>) => {
      state.characterPower = action.payload;
    },
    setCharacterShield: (state, action: PayloadAction<number>) => {
      state.characterShield = action.payload;
    },
    setCharacterImg: (state, action: PayloadAction<string>) => {
      state.characterImg = action.payload;
    },
    triggerFlash: (state) => {
      state.isFlashing = true;
    },
    resetFlash: (state) => {
      state.isFlashing = false;
    },
  },
});

export const {
  setCharacterMaxLife,
  setCharacterLife,
  setCharacterMaxEnergy,
  setCharacterEnergy,
  setCharacterPower,
  setCharacterShield,
  setCharacterImg,
  resetFlash,
  triggerFlash
} = characterSlice.actions;

export default characterSlice.reducer;