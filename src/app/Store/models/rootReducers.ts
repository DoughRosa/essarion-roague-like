import { combineReducers } from '@reduxjs/toolkit';
import gameSlice from './gameSlice';
import characterSlice from './characterSlice';

export default combineReducers({
    game: gameSlice,
    character: characterSlice,
});