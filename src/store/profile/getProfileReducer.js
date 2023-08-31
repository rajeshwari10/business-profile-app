import { GET_PROFILE_SUCCESS, GET_PROFILE_FAIL } from "../constants";

const initialState = {
    data: {},
    loading: true
};

const getProfileReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                data: payload?.data,
                loading: false,
            };
        case GET_PROFILE_FAIL:
            return {
                ...state,
                data: payload?.response,
            };

        default:
            return state;
    }
};

export default getProfileReducer;