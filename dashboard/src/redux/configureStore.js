import { createStore, combineReducers } from "redux";
import { Accounts } from "./accounts";

export const ConfigureStore = () => {
  const store = createStore(combineReducers({ accounts: Accounts }));

  return store;
};
