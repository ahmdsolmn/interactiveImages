import { combineReducers } from 'redux';
import { ACTION_TYPES } from '../actions';
import shortid from 'shortid';

const taps = (state = { All: [] }, action) => {
    switch(action.type) {
        case ACTION_TYPES.RECIEVE_TAPS:
            return Object.assign({}, state, action.payload);   
        default:
            return state;
    }
}

const image = (state = { id: '', url: '' }, action) => {
    if(action.type === ACTION_TYPES.RECIEVE_IMAGE) {
        return Object.assign({}, state, action.payload);   
    }
    return state;
}

const userId = (state = shortid.generate(), action) => {
    return state;
}

const rootReducer = combineReducers({
    image,
    taps,
    userId,
});

export default rootReducer;
