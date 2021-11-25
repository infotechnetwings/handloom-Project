import { createStore } from "redux";
import { persistStore } from "redux-persist";
import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persister = persistStore(store);
export { store, persister };
