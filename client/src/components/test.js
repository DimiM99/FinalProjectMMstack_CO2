import React, {useEffect, useState} from 'react';
import useUserStore from '../store/user'
import useAxiosPrivate from "../hooks/axiosInterceptor";
import axios from 'axios'
import SetUsernameModal from "./SetUsernameModal";
const Test = () => {
    const {updateAccessToken, accessToken, logoutRevocation} = useUserStore()
    console.log("accessToken : ",accessToken)
    const [open, setOpen] = useState(false)

    const getData = async () =>{
        const response = await axios.get('http://localhost:3001/getsimpledata', {data: {n: "cool"}} );
        console.log(response)
    }

    return (
        <div>
            <button onClick={()=>updateAccessToken()}>refreshToken</button>
            <button onClick={getData}>test</button>
            <button onClick={logoutRevocation}>logout</button>
            <button onClick={()=> setOpen(true)}>open Modal for username</button>
            <SetUsernameModal open={open} setOpen={setOpen}/>
        </div>
    );
};

export default Test;