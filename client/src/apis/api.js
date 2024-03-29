import axiosInstance from "../utils/axiosInstances";

export async function updateUsername(walletId, accessToken, newUsername) {
    const res = await axiosInstance.post("http://localhost:3001/updateusername", {newUsername, accessToken, walletId})
    return res.status
}

export async function addList(walletId, name, color , accessToken){
    const res = await axiosInstance.post("http://localhost:3001/addList", {walletId, name, color , accessToken})
    return res.status
}

export async function deleteList(walletId, listObjectId, accessToken){
    const res = await axiosInstance.post("http://localhost:3001/deleteList", {walletId, listObjectId, accessToken})
    return res.status
}

export async function addTask(walletId, listId, taskHeading, status, expirationTimestamp, accessToken){
    const res = await axiosInstance.post("http://localhost:3001/addTask", {walletId, listId, taskHeading, status, expirationTimestamp, accessToken})
    return res.status
}

export async function deleteTask(walletId, listObjectId, taskObjectId, accessToken){
    const res = await axiosInstance.post("http://localhost:3001/deleteTask", {walletId, listObjectId, taskObjectId, accessToken})
    return res.status
}

export async function getAllLists(walletId, accessToken) {
    const res = await axiosInstance.post("http://localhost:3001/userlists", {walletId, accessToken})
    console.log('sdaf',res)
    return res.data
}

export async function getTaks(listId, walletId ,accessToken){
    const res = await axiosInstance.post("http://localhost:3001/listtasks", {listId, walletId, accessToken})
    return res.data
}

export async function checkTask(walletId, accessToken, listId, taskId){
    const res = await axiosInstance.post("http://localhost:3001/checkTask", {walletId, accessToken, listId, taskId})
    return res.data
}

export async function allTasks(walletId, accessToken){
    const res = await axiosInstance.post("http://localhost:3001/getAllTasks", {walletId, accessToken})
    return res.data
}

export async function getListFromTask(walletId, accessToken, listId){
    const res = await axiosInstance.post("http://localhost:3001/getListFromTaskId", {walletId, accessToken, listId})
    return res.data
}