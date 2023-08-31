import { GET_UPDATE_PROFILE_SUCCESS, GET_UPDATE_PROFILE_FAIL } from "../constants";

const initialState = {
    data: {},
    loading: true
};

const updateProfileReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                data: payload?.data,
                loading: false,
            };
        case GET_UPDATE_PROFILE_FAIL:
            return {
                ...state,
                data: payload?.response,
            };

        default:
            return state;
    }
};

export default updateProfileReducer;