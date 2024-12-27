import { combineReducers } from '@reduxjs/toolkit';
import gameSlice from './gameSlice';
import characterSlice from './characterSlice';
import enemiesSlice from './enemiesSlice';
import cardSlice from './cardSlice';

export default combineReducers({
    game: gameSlice,
    character: characterSlice,
    enemies: enemiesSlice,
    card: cardSlice
});