import axios from "axios";
import {configureRequestHeaders} from "../utils/configureRequestHeaders";


export async function login(walletId, setUser) {
    const {data: tokens} = await axios.post("http://localhost:4000/login", {walletId})
    const {data} = await axios.get("http://localhost:3001/user", configureRequestHeaders(tokens.accessToken, walletId))
    return {accessToken:tokens.accessToken, refreshToken: tokens.refreshToken, ...data}
}

export async function logout(walletId, logoutRevocation) {
    const {status} = await axios.post("http://localhost:4000/login", {walletId})
    logoutRevocation()
}