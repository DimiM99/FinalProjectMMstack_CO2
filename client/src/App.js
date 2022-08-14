import { Routes, Route } from "react-router-dom"
import Login from "./containers/Login";
import {useEffect, useState} from "react";
import axios from "axios"

async function login(walletId, setAccessToken, setRefreshToken) {
    console.log("login called")
    const {data} = await axios.post("http://localhost:4000/login", {walletId})
    setAccessToken(data.accessToken)
    setRefreshToken(data.refreshToken)
    console.log("finished setting tokens")
}
async function getData(walletId, accessToken, refreshToken) {
    console.log("coolasdfsa", accessToken)
    const res = await axios.get("http://localhost:3001/getsimpledata", {
        headers: {
            "authorization": 'Bearer ' + accessToken
        },
        data: {
            walletId,
        }
    })
    console.log(res)
}

function App() {
    const [userAddress, setUserAddress] = useState("");
    const [accessToken, setAccessToken] = useState("")
    const [refreshToken, setRefreshToken] = useState("")
    useEffect(()=>{
        if(userAddress){
            console.log(userAddress)
            login(userAddress, setAccessToken, setRefreshToken)
            console.log(accessToken, refreshToken)
        }
    },[userAddress, accessToken, refreshToken])

  return (
    <div className="App">
        {userAddress ? (
            <div>
               <button onClick={() => getData(userAddress, accessToken, refreshToken)}>get Data</button>
            </div>
          // <Routes>
          //   <Route path="/" element={ <h1>Home</h1> } />
          //   <Route path="/xxxx" element={ <h1>XXXX</h1> } />
          // </Routes>
        ): (
            <Login setUserAddress={setUserAddress}/>
        )}
    </div>
  )
}

export default App