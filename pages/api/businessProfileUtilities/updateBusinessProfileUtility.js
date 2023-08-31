import axios from "axios";
import { apiResponse } from "../../../utils/api";

const businessProfileUpdate = async (req, res, next) => {
    let jsonResponse = null;
    try {
        jsonResponse = await axios
            .put(`http://localhost:8081/profile/user/${req?.body?.userId}`,
                req?.body?.profileData)
            .then((response) =>
                apiResponse.then({
                    data: response?.data,
                })
            )
            .catch((error) =>
                apiResponse.catch({
                    error,
                    message: error?.response?.data?.failureDetails?.description,
                    statusCode: error?.response?.data?.statusCode,
                    response: error?.response?.data,
                })
            );
    } catch (error) {
        jsonResponse = apiResponse.catch({
            response: error.toString(),
        });
    }
    res.json(jsonResponse);
}

export default businessProfileUpdate;
