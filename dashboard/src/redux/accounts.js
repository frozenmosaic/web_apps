/* REDUCER */

import { ACCOUNTS } from "../shared/accounts";
import * as ActionTypes from "./ActionTypes";

export const Accounts = (state = ACCOUNTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ALLOC:
      var account = action.payload;
      var alloc = account.alloc;
      var id = account.id;

      var newState = state.map((acct) => {
        if (acct.id == id) return Object.assign({}, acct, { alloc: alloc });
        return acct;
      });
      return newState;

    default:
      return state;
  }
};
