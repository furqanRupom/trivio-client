
import { authKey } from "@/constants/constant";
import { getLocalStorage } from "@/localStorage";
import { setAccessToken } from "@/services/actions/setAccessToken";
import axios from "axios";
const instance = axios.create();
instance.defaults.headers.post['Content-type'] = "application/json";
instance.defaults.headers['Accept'] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const accessToken = getLocalStorage(authKey);
    if (accessToken) {
        config.headers.Authorization = accessToken;
    }
    setAccessToken(accessToken as string)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
// @ts-ignore
instance.interceptors.response.use(function (response) {

    const responseObject: { data: any} = {
        
        data: response?.data,
    }
    console.log(response)
    return responseObject;

}, async function (error) {
    const responseErrorObject = {
        statusCode: error?.response?.statusCode || 500,
        message: error?.response?.message || "something went wrong",
        data: error?.response?.result || "something went wrong"
    }
    return responseErrorObject;

});


export { instance };