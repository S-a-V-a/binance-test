import {constantCoins} from "./action_creators";


const initialState = {
    data: [],
    isLoaded: false,
    error: ''
}

export default function CoinReducer(state = initialState, action) {
    switch (action.type) {
        case constantCoins.IS_LOADED:
            return {...state, isLoaded: true}
        case constantCoins.SET_ERROR:
            return {...state, error: action.payload}
        case constantCoins.SET_PRICES:
            return {...state, data: action.payload}
        default:
            return state;
    }
}