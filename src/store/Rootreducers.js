import { combineReducers } from "redux";
import toastReducer from "./toast/ToastReducer"
import getProfileReducer from "./profile/getProfileReducer";
import updateProfileReducer from "./profile/updateProfileReducer";

const RootReducers = combineReducers({
    toastReducer,
    getProfileReducer,
    updateProfileReducer
});

export default RootReducers;