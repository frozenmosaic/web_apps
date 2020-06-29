import * as ActionTypes from "./ActionTypes";

export const addAlloc = (id, alloc) => ({
    type: ActionTypes.ADD_ALLOC,
    payload: {
        id: id,
        alloc: alloc
    }
})