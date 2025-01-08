import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import EnemyInterface from "@/app/Interfaces/EnemyInterface";
 
interface EnemyState {
  id: number,
  name: string,
  enemyInScreen: EnemyInterface | null,
  initialLife: number,
  currentLife: number,
  enemyPower: number,
  initialShield: number,
  currentShield: number,
  img: string,
  initialPower: number,
  currentPower: number,
  text: '',
  isFlashing: boolean,
}

const initialState: EnemyState = {
  id: 0,
  name: '',
  enemyInScreen: null,
  initialLife: 0,
  currentLife: 0,
  enemyPower: 0,
  initialShield: 0,
  currentShield: 0,
  img: '',
  initialPower: 0,
  currentPower: 0,
  text: '',
  isFlashing: false,
};

const enemySlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setEnemyInScreen: (state, action: PayloadAction<EnemyInterface | null>) => {
      state.enemyInScreen = action.payload;
  },
    setEnemyMaxLife: (state, action: PayloadAction<number>) => {
      state.initialLife = action.payload;
    },
    setEnemyLife: (state, action: PayloadAction<number>) => {
      state.currentLife = action.payload;
    },
    setEnemyPower: (state, action: PayloadAction<number>) => {
      state.currentPower = action.payload;
    },
    setEnemyShield: (state, action: PayloadAction<number>) => {
      state.currentShield = action.payload;
    },
    setEnemyImg: (state, action: PayloadAction<string>) => {
      state.img = action.payload;
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
  resetFlash,
  setEnemyImg,
  setEnemyInScreen,
  setEnemyLife,
  setEnemyMaxLife,
  setEnemyPower,
  setEnemyShield,
  triggerFlash,
} = enemySlice.actions;

export default enemySlice.reducer;