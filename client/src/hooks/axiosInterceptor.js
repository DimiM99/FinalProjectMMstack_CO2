import { useEffect } from "react";
import useUserStore from '../store/user'
import axios from 'axios'

const useAxiosPrivate = () => {
    const {updateAccessToken, accessToken} = useUserStore()
    const refresh = updateAccessToken;

    useEffect(() => {
        console.log('effect called')
        const requestIntercept = axios.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${accessToken}`;
                    console.log(accessToken)
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axios.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    console.log("newAccessToken", newAccessToken)
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axios(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.request.eject(requestIntercept);
            axios.interceptors.response.eject(responseIntercept);
        }
    }, [accessToken, refresh])

    return axios;
}

export default useAxiosPrivate;