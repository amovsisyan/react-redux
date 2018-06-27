import * as actionTypes from './../actions'

const initialState = {
    results: []
};

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return { ...state, results: state.results.concat({id: new Date(), value: action.result})};

        case actionTypes.DELETE_RESULT:
            const newArray = state.results.filter((result) => {
                return result.id !== action.elementId;
            });
            return { ...state, results: newArray};
    }

    return state;
};

export default resultsReducer;