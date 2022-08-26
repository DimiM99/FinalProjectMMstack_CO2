import React, {useEffect, useState} from 'react';
import useUserStore from '../store/user'
import useAxiosPrivate from "../hooks/axiosInterceptor";
import axios from 'axios'
import SetUsernameModal from "./SetUsernameModal";
import { addList, deleteList } from '../apis/api';

const Test = () => {
    const {walletId, updateAccessToken, accessToken, logoutRevocation} = useUserStore()
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
            <button onClick={()=> addList(walletId, 3, "Some List", "green")}>addList</button>
            <button onClick={()=> deleteList(walletId, '6308ec3b48a5fe3b3acb10a5')}>deleteList</button>

            <SetUsernameModal open={open} setOpen={setOpen}/>
        </div>
    );
};

export default Test;