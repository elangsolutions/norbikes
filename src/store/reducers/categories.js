import {actions as actionTypes} from "../actions/categories";

const initialState = {
    categories: null,

};

export default (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.CLEAR_LANDING:
            return initialState
        case actionTypes.SET_CATEGORIES:
            return {
                ...state,
                categories: {
                    ...action.categories
                }
            };
        default:
            return state;

    }
}