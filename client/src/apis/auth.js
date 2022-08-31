import axios from "axios";
import {configureRequestHeaders} from "../utils/configureRequestHeaders";
import axiosInstance from "../utils/axiosInstances";


export async function login(walletId) {
    const {data: tokens} = await axios.post("http://localhost:4000/login", {walletId})
    if(tokens){
        window.localStorage.setItem("authTokens", JSON.stringify({authTokens: tokens}))
        const {data} = await axios.post("http://localhost:3001/user",{walletId}, configureRequestHeaders(tokens.accessToken))
        return {accessToken:tokens.accessToken, refreshToken: tokens.refreshToken, ...data}
    }else {
        return "Login Failed"
    }
}

export async function logout(walletId, logoutRevocation) {
    const {status} = await axios.post("http://localhost:4000/login", {walletId})
    logoutRevocation()
}