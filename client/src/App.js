import Login from "./containers/Login";
import {useEffect, useState} from "react";
import { login } from "./apis/auth"
import useUserStore from "./store/user";
import Overview from "./views/Overview";


function App() {
    const user = useUserStore(state => {
        return {walletId: state.walletId, accessToken: state.accessToken, refreshToken: state.refreshToken, logoutRevocation: state.logoutRevocation}
    })
    const {setUser,setUsername} = useUserStore()

    const [walletId, setWalletId] = useState(null)
    window.ethereum.on('accountsChanged', (accounts) => {
        if(!accounts.length){
            user.logoutRevocation()
            setWalletId(null)
        }
    });
    useEffect( ()=>{
        if(walletId){
            login(walletId, setUser)
                .then(({accessToken,refreshToken, username}) => {
                    window.localStorage.setItem("authTokens", JSON.stringify({accessToken, refreshToken}))
                    setUser(walletId,  refreshToken, accessToken)
                    setUsername(username)
                })
                .catch(e=>console.log(e))
        }
    },[walletId])
  return (
    <div className="App">
        {user.accessToken  ? (
            <Overview/>
        ): (
            <Login setWalletId={setWalletId}/>
        )}
    </div>
  )
}

export default App