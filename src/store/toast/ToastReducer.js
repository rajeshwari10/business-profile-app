const toastReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case "LOADER":
            return {
                ...state,
                loading: action.isLoading,
            };
        case "SNACKBAR_SUCCESS":
            return {
                ...state,
                severity: "success",
                snackbarOpen: true,
                snackbarMessage: action.message,
            };
        case "SNACKBAR_INFO":
            return {
                ...state,
                severity: "info",
                snackbarOpen: true,
                snackbarMessage: action.message,
            };
        case "SNACKBAR_ERROR":
            return {
                ...state,
                severity: "error",
                snackbarOpen: true,
                snackbarMessage: action.message,
            };
        case "SNACKBAR_WARNING":
            return {
                ...state,
                severity: "warning",
                snackbarOpen: true,
                snackbarMessage: action.message,
            };
        case "SNACKBAR_CLEAR":
            return {
                ...state,
                severity: "",
                snackbarOpen: false,
                errorSnackbarOpen: false,
                infoSnackbarOpen: false,
            };
        case "SNACKBAR_INFO_WITH_ACTION":
            return {
                ...state,
                severity: "info",
                snackbarOpen: true,
                snackbarMessage: action.message,
                isSnackbarAction: true,
                snackbarAction: action.action
            };
        default:
            return state;
    }
};

export default toastReducer;
