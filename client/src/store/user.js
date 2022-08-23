import create from 'zustand'
import axios from 'axios'
import {configureRequestHeaders} from "../utils/configureRequestHeaders";
const useUserStore = create((set,get) => ({
    walletId: "",
    username: "",
    accessToken: "",
    refreshToken: "",
    updateAccessToken: async () =>{
        const { refreshToken } = get()
        const {data} = await axios.post('http://localhost:4000/token', {refreshToken}, configureRequestHeaders(refreshToken) )
        if(data){
            set({accessToken: data.accessToken})
        }
        return data.accessToken
    },
    setUser: ((walletId,  refreshToken, accessToken) => set({walletId,  refreshToken, accessToken})),
    setUsername: ((username) => set({username})),
    logoutRevocation: () => set({ walletId: "", accessToken: "", refreshToken: "" }),
}))

export default useUserStore