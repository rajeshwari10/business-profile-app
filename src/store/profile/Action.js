import fetchApi from "../../../utils/api";

import {
    GET_PROFILE_FAIL,
    GET_PROFILE_SUCCESS,
    GET_UPDATE_PROFILE_FAIL,
    GET_UPDATE_PROFILE_SUCCESS
} from "../constants";

const getProfileData = (userId) => {
    return async (dispatch) => {
        const apiResponse = await fetchApi(null, {
            url: `/api/businessProfileUtilities/getBusinessProfileUtility`,
            data: {
                userId
            }
        });

        if (apiResponse?.status) {
            if (!apiResponse?.data) {
                console.log("No content..");
            }
            dispatch({
                type: GET_PROFILE_SUCCESS,
                payload: apiResponse || {},
            });
        } else {
            dispatch({
                type: GET_PROFILE_FAIL,
                payload: apiResponse || {}
            });
            console.log("Unable to get business profile, please try again.");
        }

        return apiResponse;
    };
};

const updateProfileData = (profileData, userId) => {
    return async (dispatch) => {
        const apiResponse = await fetchApi(null, {
            url: `/api/businessProfileUtilities/updateBusinessProfileUtility`,
            data: {
                profileData,
                userId
            }
        });

        if (apiResponse?.status) {
            if (!apiResponse?.data) {
                console.log("No content..");
            }
            dispatch({
                type: GET_UPDATE_PROFILE_SUCCESS,
                payload: apiResponse || {},
            });
        } else {
            dispatch({
                type: GET_UPDATE_PROFILE_FAIL,
                payload: apiResponse || {}
            });
            console.log("Unable to update business profile, please try again.");
        }

        return apiResponse;
    };
};


const profileAction = {
    getProfileData,
    updateProfileData
};
export default profileAction;