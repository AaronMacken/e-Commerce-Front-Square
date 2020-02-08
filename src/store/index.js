// create redux store
import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";

const middleware = [thunk];


const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer, 
  compose(
    applyMiddleware(...middleware)
  )
);

export const persistor = persistStore(store);


