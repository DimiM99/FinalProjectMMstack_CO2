import axios from "axios";

const configureRequestHeaders = (accesstoken, data) => ({
    headers: {
        'authorization': `Bearer ${accesstoken}`
    },
    data
})

export async function login(walletId, setUser) {
    const {data} = await axios.post("http://localhost:4000/login", {walletId})
    if(data){
        setUser(walletId, data.accessToken, data.refreshToken)
    }
}

export async function getData(walletId, accessToken) {
    console.log("coolasdfsa", accessToken)
    const res = await axios.get("http://localhost:3001/getsimpledata", configureRequestHeaders(accessToken, {walletId}))
    console.log(res)
}


export async function logout(walletId, logoutRevocation) {
    console.log("login called")
    const {status} = await axios.post("http://localhost:4000/login", {walletId})
    logoutRevocation()
    console.log("finished setting tokens")
}