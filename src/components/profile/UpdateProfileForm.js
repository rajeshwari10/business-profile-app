import React from 'react';
import {
    Card,
    CardContent,
    Divider,
    Box,
    Typography,
    Button,
    Grid,
    TextField
} from '@mui/material';

const UpdateProfileForm = (
    {
        profileData,
        onChange,
        onClick
    }
) => {
    return (
        <div>
            <Card
                sx={{
                    p: 0,
                }}
            >
                <Box
                    sx={{
                        padding: '15px 30px',
                    }}
                    display="flex"
                    alignItems="center"
                >
                    <Box flexGrow={1}>
                        <Typography fontWeight="500" variant="h4">
                            Business Profile Update
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                <CardContent
                    sx={{
                        padding: '30px',
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={12} sm={12}>
                            <Typography variant="h6" component="label" htmlFor="company-name-text">Company Name</Typography>
                            <TextField id="company-name-text" variant="outlined" fullWidth size="small" name="companyName"
                                defaultValue={profileData.companyName} onChange={onChange} />
                        </Grid>
                        <Grid item lg={6} md={12} sm={12}>
                            <Typography variant="h6" component="label" htmlFor="legal-name-text">Legal Name</Typography>
                            <TextField id="legal-name-text" variant="outlined" fullWidth size="small" name="legalName"
                                defaultValue={profileData.legalName} onChange={onChange} />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardContent
                    sx={{
                        padding: '30px',
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <Typography variant="h5" component="label" htmlFor="business-address-text">Business Address</Typography>
                            <br />
                            <Typography variant="h6" component="label" sx={{ mt: 0 }} htmlFor="ba-line-one-text">Line 1</Typography>
                            <TextField id="ba-line-one-text" variant="outlined" fullWidth size="small" name="businessAddress.lineOne"
                                defaultValue={profileData.businessAddress.lineOne} onChange={onChange} />

                            <Typography variant="h6" component="label" sx={{ mt: 0 }} htmlFor="ba-line-two-text">Line 2</Typography>
                            <TextField id="ba-line-two-text" variant="outlined" fullWidth size="small" name="businessAddress.lineTwo"
                                defaultValue={profileData.businessAddress.lineTwo} onChange={onChange} />

                            <Typography variant="h6" component="label" sx={{ mt: 0 }} htmlFor="ba-city-text">City</Typography>
                            <TextField id="ba-city-text" variant="outlined" fullWidth size="small" name="businessAddress.city"
                                defaultValue={profileData.businessAddress.city} onChange={onChange} />

                            <Typography variant="h6" component="label" sx={{ mt: 0 }} htmlFor="ba-state-text">State</Typography>
                            <TextField id="ba-state-text" variant="outlined" fullWidth size="small" name="businessAddress.state"
                                defaultValue={profileData.businessAddress.state} onChange={onChange} />

                            <Typography variant="h6" component="label" sx={{ mt: 0 }} htmlFor="ba-zip-text">Zip</Typography>
                            <TextField id="ba-zip-text" variant="outlined" fullWidth size="small" name="businessAddress.zip"
                                defaultValue={profileData.businessAddress.zip} onChange={onChange} />

                            <Typography variant="h6" component="label" sx={{ mt: 0 }} htmlFor="ba-country-text">Country</Typography>
                            <TextField id="ba-country-text" variant="outlined" fullWidth size="small" name="businessAddress.country"
                                defaultValue={profileData.businessAddress.country} onChange={onChange} />
                        </Grid>
                    </Grid>
                </CardContent>

                <CardContent
                    sx={{
                        padding: '30px',
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <Typography variant="h5" component="label" htmlFor="legal-address-text">Legal Address</Typography>
                            <br />
                            <Typography variant="h6" component="label" sx={{ mt: 0 }} htmlFor="la-line-one-text">Line 1</Typography>
                            <TextField id="la-line-one-text" variant="outlined" fullWidth size="small" name="legalAddress.lineOne"
                                defaultValue={profileData.legalAddress.lineOne} onChange={onChange} />

                            <Typography variant="h6" component="label" sx={{ mt: 0 }} htmlFor="la-line-two-text">Line 2</Typography>
                            <TextField id="la-line-two-text" variant="outlined" fullWidth size="small" name="legalAddress.lineTwo"
                                defaultValue={profileData.legalAddress.lineTwo} onChange={onChange} />

                            <Typography variant="h6" component="label" sx={{ mt: 0 }} htmlFor="la-city-text">City</Typography>
                            <TextField id="la-city-text" variant="outlined" fullWidth size="small" name="legalAddress.city"
                                defaultValue={profileData.legalAddress.city} onChange={onChange} />

                            <Typography variant="h6" component="label" sx={{ mt: 0 }} htmlFor="la-state-text">State</Typography>
                            <TextField id="la-state-text" variant="outlined" fullWidth size="small" name="legalAddress.state"
                                defaultValue={profileData.legalAddress.state} onChange={onChange} />

                            <Typography variant="h6" component="label" sx={{ mt: 0 }} htmlFor="la-zip-text">Zip</Typography>
                            <TextField id="la-zip-text" variant="outlined" fullWidth size="small" name="legalAddress.zip"
                                defaultValue={profileData.legalAddress.zip} onChange={onChange} />

                            <Typography variant="h6" component="label" sx={{ mt: 0 }} htmlFor="la-country-text">Country</Typography>
                            <TextField id="la-country-text" variant="outlined" fullWidth size="small" name="legalAddress.country"
                                defaultValue={profileData.legalAddress.country} onChange={onChange} />
                        </Grid>
                    </Grid>
                </CardContent>

                <CardContent
                    sx={{
                        padding: '30px',
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <Typography variant="h5" component="label" htmlFor="tax-identifiers-text">Tax Identifiers</Typography>
                            <br />
                            <Typography variant="h6" component="label" sx={{ mt: 0 }} htmlFor="ti-pan-text">PAN</Typography>
                            <TextField id="ti-pan-text" variant="outlined" fullWidth size="small" name="taxIdentifiers.pan"
                                defaultValue={profileData.taxIdentifiers.pan} onChange={onChange} />

                            <Typography variant="h6" component="label" sx={{ mt: 0 }} htmlFor="ti-ein-text">EIN</Typography>
                            <TextField id="ti-ein-text" variant="outlined" fullWidth size="small" name="taxIdentifiers.ein"
                                defaultValue={profileData.taxIdentifiers.ein} onChange={onChange} />
                        </Grid>
                    </Grid>
                </CardContent>

                <CardContent
                    sx={{
                        padding: '30px',
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={12} sm={12}>
                            <Typography variant="h6" component="label" htmlFor="email-text">Email</Typography>
                            <TextField id="email-text" variant="outlined" fullWidth size="small" name="email"
                                defaultValue={profileData.email} onChange={onChange} />
                        </Grid>
                        <Grid item lg={6} md={12} sm={12}>
                            <Typography variant="h6" component="label" htmlFor="website-text">Website</Typography>
                            <TextField id="website-text" variant="outlined" fullWidth size="small" name="website"
                                defaultValue={profileData.website} onChange={onChange} />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <Box p={3}>
                    <Button variant="contained" color="primary" onClick={onClick}>
                        Update
                    </Button>
                </Box>
            </Card>
        </div>
    );
};

export default UpdateProfileForm;
