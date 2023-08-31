export const showSuccessSnackbar = (message) => {
    return (dispatch) => {
        dispatch({ type: "SNACKBAR_SUCCESS", message });
    };
};

export const showErrorSnackbar = (message) => {
    return (dispatch) => {
        dispatch({ type: "SNACKBAR_ERROR", message });
    };
};

export const showWarningSnackbar = (message) => {
    return (dispatch) => {
        dispatch({ type: "SNACKBAR_WARNING", message });
    };
};

export const showInfoSnackbar = (message) => {
    return (dispatch) => {
        dispatch({ type: "SNACKBAR_INFO", message });
    };
};

export const showLoader = (isLoading) => {
    return (dispatch) => {
        dispatch({ type: "LOADER", isLoading });
    };
};

export const clearSnackbar = () => {
    return (dispatch) => {
        dispatch({ type: "SNACKBAR_CLEAR" });
    };
};

export const showInfoSnackbarWithAction = (message, action) => {
    return (dispatch) => {
        dispatch({ type: "SNACKBAR_INFO_WITH_ACTION", message, action });
    };
};

