import axios from "axios";

export const apiResponse = {
    then: (res) => {
        return {
            status: true,
            httpStatusCode: 200,
            ...res,
        };
    },
    catch: ({ error, ...rest }) => {
        return {
            status: false,
            httpStatusCode: error?.response?.status || 500,
            statusCode: error?.response?.status || 500,
            message:
                "We are sorry, Your request couldn't be serviced. Please try again.",
            ...rest,
        };
    },
};


const fetchApi = async (ctx, options) => {
    const { url, data, headers, config } = options;
    let jsonResponse = {
        status: false,
        message:
            "We are sorry, Your request couldn't be serviced. Please try again.",
    };

    try {
        await axios
            .post(url, data, { headers: { ...headers }, ...config })
            .then((response) => {
                jsonResponse = response?.data;
            })
            .catch((error) => {
                jsonResponse = error?.response?.data;
            });
    } catch (error) { }

    return jsonResponse;
};

export default fetchApi;