import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EnemyState {
  enemyId: number,
  enemyMaxLife: number,
  enemyLife: number,
  enemyPower: number,
  enemyShield: number,
  enemyImg: string,
  isEnemyFlashing: boolean
}

interface EnemiesState {
  [enemyId: number]: EnemyState;
}

const initialState: EnemiesState = {};

const enemiesSlice = createSlice({
  name: "enemies",
  initialState,
  reducers: {
    updateEnemyState: (
      state,
      action: PayloadAction<{ enemyId: number; updates: Partial<EnemyState> }>
    ) => {
      const { enemyId, updates } = action.payload;
      if (state[enemyId]) {
        state[enemyId] = { ...state[enemyId], ...updates };
      }
    },
    addEnemy: (state, action: PayloadAction<EnemyState>) => {
      const enemy = action.payload;
      state[enemy.enemyId] = enemy;
    },
    removeEnemy: (state, action: PayloadAction<number>) => {
      delete state[action.payload];
    },
  },
});

export const {
  addEnemy,
  removeEnemy,
  updateEnemyState
} = enemiesSlice.actions;

export default enemiesSlice.reducer;