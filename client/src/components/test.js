import React, {useEffect} from 'react';
import useUserStore from '../store/user'
import useAxiosPrivate from "../hooks/axiosInterceptor";
import axios from 'axios'
const Test = () => {
    const {updateAccessToken, accessToken, logoutRevocation} = useUserStore()
    console.log("accessToken : ",accessToken)

    const getData = async () =>{
        const response = await axios.get('http://localhost:3001/getsimpledata', {data: {n: "cool"}} );
        console.log(response)
    }



    return (
        <div>
            <button onClick={()=>updateAccessToken()}>refreshToken</button>
            <button onClick={getData}>test</button>
            <button onClick={logoutRevocation}>logout</button>
        </div>
    );
};

export default Test;