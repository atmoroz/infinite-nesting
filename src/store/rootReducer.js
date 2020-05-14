import { combineReducers } from 'redux';
import {reducer as createListReducer} from './createList';
import {reducer as createItemListReducer} from './createItemList';

export const rootReducer = combineReducers({
    createListReducer,
    createItemListReducer,
});