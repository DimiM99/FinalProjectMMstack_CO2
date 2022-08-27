import React, {useEffect, useState} from 'react';
import useUserStore from '../store/user'
import useAxiosPrivate from "../hooks/axiosInterceptor";
import axios from 'axios'
import SetUsernameModal from "./SetUsernameModal";
import { addList, deleteList, deleteTask } from '../apis/api';

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
            <button onClick={()=> deleteList(walletId, '6308fa6fb10a0ad11bb05226')}>deleteList</button>
            <button onClick={()=> deleteTask(walletId, '630a0d19aa855425c0bc8b51', '630a0d52ce9455cd62e50a1e')}>deleteTask</button>

            <SetUsernameModal open={open} setOpen={setOpen}/>
        </div>
    );
};

export default Test;