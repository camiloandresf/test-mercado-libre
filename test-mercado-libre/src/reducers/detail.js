import {FETCHING, FETCH_SUCCESS} from "./actions/items";

export const initialState = { 
    fetching : true,
    detail : [],
    errors: false
};

export function detailReducer (state = initialState, action) {
    switch (action.type) {
        case FETCHING:
            return{
                ...initialState,
                fetching: true
            };
            case FETCH_SUCCESS:
               return {
                fetching : false,
                detail : action.payload.data,
                errors: false
               };
            default:
                return state;
    }
}