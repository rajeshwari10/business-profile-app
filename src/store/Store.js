import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducers from "./Rootreducers";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => {
    const composeEnhancers =
        typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
            : compose;
    return createStore(RootReducers, composeEnhancers(applyMiddleware(thunk)));
};

export default createWrapper(makeStore, { debug: true });