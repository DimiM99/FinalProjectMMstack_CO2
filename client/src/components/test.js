import React, {useEffect} from 'react';
import useUserStore from '../store/user'
import useAxiosPrivate from "../hooks/axiosInterceptor";
import axios from 'axios'
const Test = () => {
    const {updateAccessToken, accessToken} = useUserStore()
    console.log("accessToken : ",accessToken)

    axios.interceptors.response.use(response => response, async (err) => axios(err.config))
    const getData = async () =>{
        const response = await axios.get('http://localhost:3001/getsimpledata', {data: {n: "cool"}}, {n:"n"} );
        console.log(response)
    }


    return (
        <div>
            <button onClick={()=>updateAccessToken()}>refreshToken</button>
            <button onClick={getData}>test</button>
        </div>
    );
};

export default Test;