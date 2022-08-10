import * as actionNames from "../actions/actionTypes";

export const saidbarReducer = (state = (false), action) => {
    switch (action.type) {
        case actionNames.SAIDBAR_OPEN:
            return action.param;
        default:
            return state;
    }
}