const initialState = {
    counter: 13,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;

        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 };

        case 'ADD':
            return { ...state, counter: state.counter + action.payload.value };

        case 'SUBTRACT':
            return { ...state, counter: state.counter - action.payload.value };

        case 'STORE_RESULT':
            return { ...state, results: state.results.concat({id: new Date(), value: state.counter})};

        case 'DELETE_RESULT':
            const newArray = state.results.filter((result) => {
                return result.id !== action.elementId;
            });
            return { ...state, results: newArray};
    }

    return state;
};

export default reducer;