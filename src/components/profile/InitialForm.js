import {
    TextField,
    Card,
    CardContent,
    Box,
    Button
} from "@mui/material";

const InitialForm = ({
    onClick,
    onChange
}) => {
    return (
        <Card
            sx={{
                mb: 4,
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        mt: 2,
                    }}
                >
                    <TextField
                        id="user-id"
                        label="User ID"
                        fullWidth
                        placeholder="Enter User Id"
                        variant="outlined"
                        size="small"
                        inputProps={{ 'aria-label': 'Enter UserId' }}
                        sx={{
                            mb: 1,
                        }}
                        onChange={onChange}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{
                            width: '100%',
                            display: 'block',
                        }}
                        onClick={onClick}
                    >
                        Submit
                    </Button>
                </Box>
            </CardContent>
        </Card>
    )
};

export default InitialForm;
