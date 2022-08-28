import axiosInstance from "../utils/axiosInstances";

export async function updateUsername(walletId, accessToken, newUsername) {
    const res = await axiosInstance.post("http://localhost:3001/updateusername", {newUsername, accessToken, walletId})
    return res.status
}

export async function addList(walletId, listId, name, color){
    const res = await axiosInstance.post("http://localhost:3001/addList", {walletId, listId, name, color})
    return res.status
}

export async function deleteList(walletId, listObjectId){
    const res = await axiosInstance.post("http://localhost:3001/deleteList", {walletId, listObjectId})
    return res.status
}

export async function deleteTask(walletId, listObjectId, taskObjectId){
    const res = await axiosInstance.post("http://localhost:3001/deleteTask", {walletId, listObjectId, taskObjectId})
    return res.status
}

export async function getAllLists(walletId, accessToken) {
    const res = await axiosInstance.post("http://localhost:3001/userlists", {walletId, accessToken})
    return res.data
}

export async function addNewList(walletId, accessToken, listId, name, color){
    const res = await axiosInstance.post("http://localhost:3001/addList", {walletId, accessToken, listId, name, color})
    return res.status
}

export async function getTaks(listId, walletId ,accessToken){
    const res = await axiosInstance.post("http://localhost:3001/listtasks", {listId, walletId, accessToken})
    return res.data
}