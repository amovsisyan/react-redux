import {DELETE_RESULT, STORE_RESULT} from "./actionTypes";

const saveResult = (result) => {
    return {
        type: STORE_RESULT,
        result: result
    }
};

export const storeResult = (result) => {
    return (dispatch, getState) =>  {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    };
};

export const deleteResult = (elementId) => {
    return {
        type: DELETE_RESULT,
        elementId: elementId
    }
};