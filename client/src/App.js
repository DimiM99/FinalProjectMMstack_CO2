import { Routes, Route } from "react-router-dom"
import Login from "./containers/Login";
import Layout from "./containers/Layout";
import {useEffect, useState} from "react";
import { login, getData } from "./apis/auth"
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
            // <div>
            //    <button onClick={() => getData(walletId, user.accessToken, user.refreshToken)}>get Data</button>
            // </div>
            <Overview/>
          // <Routes>
          //   <Route path="/" element={ <h1>Home</h1> } />
          //   <Route path="/xxxx" element={ <h1>XXXX</h1> } />
          // </Routes>
        ): (
            <Login setWalletId={setWalletId}/>
        )}
    </div>
  )
}

export default App