import {actions as actionTypes} from "../actions/categories";

const initialState = {categories:[]};

export default (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.CLEAR_LANDING:
            return initialState
        case actionTypes.SET_CATEGORIES:
            return {
                ...state,
                categories : action.categories.map(cat=>cat)
            };
        default:
            return state;

    }
}