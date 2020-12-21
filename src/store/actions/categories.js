export const actions = {
    CLEAR_LANDING: "CLEAR_LANDING",
    SET_CATEGORIES:"SET_CATEGORIES",
};

export const setCategories = (dispatch,categories) => {
    dispatch({
        type: actions.SET_CATEGORIES,
        categories: categories
    })
    return categories
};