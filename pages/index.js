import {
  Grid
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import profileAction from "../src/store/profile/Action";
import { showErrorSnackbar, showInfoSnackbar } from "../src/store/toast/Action";
import InitialForm from "../src/components/profile/InitialForm";
import UpdateProfileForm from "../src/components/profile/updateProfileForm";


const WidgetBusinessProfile = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const businessProfile = useSelector((state) => state?.getProfileReducer?.data);
  const [profileData, setProfileData] = useState({});
  const businessProfileUpdate = useSelector((state) => state?.updateProfileReducer.data);

  useEffect(() => {
    if (businessProfile?.failureDetails) {
      dispatch(showErrorSnackbar(businessProfile?.failureDetails?.description || "Error while getting business profile"));
    }
    else if (businessProfile?.result) {
      setProfileData(businessProfile?.result);
    }
  }, [businessProfile])

  useEffect(() => {
    if (businessProfileUpdate?.failureDetails) {
      if (businessProfileUpdate?.failureDetails?.details) {
        let details = businessProfileUpdate?.failureDetails?.details;
        let description = "";
        for (let key in details) {
          description += key + " -> " + details[key] + ",  ";
        }
        dispatch(showErrorSnackbar(description));
      }
      else {
        dispatch(showErrorSnackbar(businessProfileUpdate?.failureDetails?.description || "Error while updating business profile"));
      }
    }
    else if (businessProfileUpdate?.success) {
      dispatch(showInfoSnackbar("Business profile updated successfully!!"));
    }
  }, [businessProfileUpdate])

  const handleProfileDataChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split('.');
      setProfileData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        }
      }));
    }
    else {
      setProfileData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <Grid container spacing={0} >
      {Object.keys(profileData).length > 0 ? (
        <Grid item lg={12} md={12} xs={12}>
          <UpdateProfileForm
            profileData={profileData}
            onChange={handleProfileDataChange}
            onClick={() => {
              dispatch(profileAction.updateProfileData(profileData, userId))
            }}
          />
        </Grid>) :
        (<InitialForm
          onClick={() => {
            dispatch(profileAction.getProfileData(userId))
          }}
          onChange={(e) => {
            setUserId(e.target.value)
          }}
        />)
      }
    </Grid >
  )
}

export default WidgetBusinessProfile;