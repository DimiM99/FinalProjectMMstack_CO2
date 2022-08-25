import axiosInstance from "../utils/axiosInstances";

export async function updateUsername(walletId, accessToken, newUsername) {
    const res = await axiosInstance.post("http://localhost:3001/updateusername", {newUsername, accessToken, walletId})
    return res.status
}

export async function addList(walletId, listId, name, color){
    const res = await axiosInstance.post("http://localhost:3001/addList", {walletId, listId, name, color})
    return res.status
}
