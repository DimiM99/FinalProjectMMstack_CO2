import axios from "axios";
import {configureRequestHeaders} from "../utils/configureRequestHeaders";

export async function updateUsername(walletId, accessToken, newUsername) {
    const res = await axios.post("http://localhost:3001/updateusername", {newUsername, walletId}, configureRequestHeaders(accessToken))
    return res.status
}
