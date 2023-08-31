import { Alert, CircularProgress, Snackbar, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearSnackbar } from "../../store/toast/Action";

export default function ToastNotifications() {
    const dispatch = useDispatch();

    const { snackbarMessage, snackbarOpen, severity, loading, isSnackbarAction, snackbarAction } = useSelector(
        (state) => state.toastReducer
    );

    function handleClose() {
        dispatch(clearSnackbar());
    }

    return (
        <>
            {loading ? (
                <CircularProgress
                    sx={{
                        color: { severity },
                        position: "absolute",
                        bottom: 25,
                        left: 25,
                        zIndex: 1,
                    }}
                    size="2.2rem"
                    thickness={5.5}
                />
            ) : isSnackbarAction ?
                (
                    <Snackbar
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                        open={snackbarOpen}
                        autoHideDuration={20000}
                        onClose={handleClose}
                    >
                        <Alert severity={severity} variant="filled" action={(
                            <Button color="inherit" size="small" onClick={snackbarAction}>
                                VIEW
                            </Button>
                        )}>
                            {snackbarMessage}
                        </Alert>
                    </Snackbar>
                ) :
                (
                    <Snackbar
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        open={snackbarOpen}
                        autoHideDuration={2000}
                        onClose={handleClose}
                    >
                        <Alert severity={severity} variant="filled">
                            {snackbarMessage}
                        </Alert>
                    </Snackbar>
                )}
        </>
    );
}
