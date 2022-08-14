import Login from "./containers/Login";
import {useEffect, useState} from "react";
import { login } from "./apis/auth"
import useUserStore from "./store/user";
import Overview from "./views/Overview";


function App() {
    const user = useUserStore(state => {
        return {walletId: state.walletId, accessToken: state.accessToken, refreshToken: state.refreshToken}
    })
    const setUser = useUserStore(state => state.setUser)

    const [walletId, setWalletId] = useState(null)

    useEffect( ()=>{
        if(walletId){
            login(walletId, setUser)
        }
    },[walletId])
    console.log(user)
  return (
    <div className="App">
        {user.walletId  ? (
            <Overview/>
        ): (
            <Login setWalletId={setWalletId}/>
        )}
    </div>
  )
}

export default App