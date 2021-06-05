import {FETCHING, FETCH_SUCCESS} from "./actions/items";

export const initialState = { 
    fetching : true,
    items : [],
    errors: false
};

export function itemsReducer (state = initialState, action) {
    switch (action.type) {
        case FETCHING:
            return{
                ...initialState,
                fetching: true
            };
            case FETCH_SUCCESS:
               return {
                fetching : false,
                items : action.payload.data,
                errors: false
               };
            default:
                return state;
    }
}