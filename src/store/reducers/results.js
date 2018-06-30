import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utility'

const initialState = {
    results: []
};

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(
                state,
                {results: state.results.concat({id: new Date(), value: action.result})}
            );

        case actionTypes.DELETE_RESULT:
            const newArray = state.results.filter((result) => {
                return result.id !== action.elementId;
            });

            return updateObject(
                state,
                {results: newArray}
            );
    }

    return state;
};

export default resultsReducer;