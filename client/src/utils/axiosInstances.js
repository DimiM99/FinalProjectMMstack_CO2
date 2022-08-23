import axios from 'axios'
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'

const authUrl = process.env.REACT_APP_BASE_URL_AUTH
const baseUrl = process.env.REACT_APP_BASE_URL_API

let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null

const axiosInstance = axios.create({
    baseUrl,
    headers:{Authorization: `Bearer ${authTokens?.accessToken}`}
});

axiosInstance.interceptors.request.use(async req => {
    if(!authTokens){
        authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
        req.headers.Authorization = `Bearer ${authTokens?.accessToken}`
    }
    const user = jwt_decode(authTokens.accessToken)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if(!isExpired) return req

    const response = await axios.post(`${authUrl}/token`, {
        refreshToken: authTokens.refreshToken
    });
    localStorage.setItem('authTokens', JSON.stringify(response.data))
    req.headers.Authorization = `Bearer ${response.data.accessToken}`
    return req
})


export default axiosInstance;