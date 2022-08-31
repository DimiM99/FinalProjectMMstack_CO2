import Login from "./containers/Login";
import {useEffect, useState} from "react";
import { login } from "./apis/auth"
import useUserStore from "./store/user";
import Overview from "./views/Overview";
import SetUsernameModal from "./components/SetUsernameModal";


function App() {
    const user = useUserStore(state => {
        return {walletId: state.walletId, accessToken: state.accessToken, refreshToken: state.refreshToken, logoutRevocation: state.logoutRevocation}
    })
    const {setUser,setUsername, username} = useUserStore()

    const [walletId, setWalletId] = useState(null)
    const [open, setOpen] = useState(false)
    const [isUsernameSet, setIsUsernameSet] = useState(false)
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
                    if(username){
                        setUsername(username)
                        setIsUsernameSet(true)
                    }else {
                        setOpen(true)
                    }
                })
                .catch(e=>console.log(e))
        }
    },[walletId])
  return (
    <div className="App">
        {user.accessToken && isUsernameSet  ? (
            <Overview/>
        ): (
            <>
                <Login setWalletId={setWalletId}/>
                <SetUsernameModal setIsUsernameSet={setIsUsernameSet} open={open} setOpen={setOpen}/>
            </>
        )}
    </div>
  )
}

export default App