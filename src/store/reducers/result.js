import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // push method manipulates the old array
                // concat method returns a new array, which is the old array plus the argument added to concat
                results: state.results.concat({ id: new Date(), value: action.result })
            }
        case actionTypes.DELETE_RESULT:
            // one way to do it
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)

            // most common way to do it
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
        default:
        // do nothing
    }
    return state;
};

export default reducer;