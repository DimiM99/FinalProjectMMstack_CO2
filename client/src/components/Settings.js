import React, {useState} from 'react';
import Box from "@mui/material/Box";
import useUserStore from "../store/user";
import {Typography, TextField, Button} from "@mui/material";
import {updateUsername} from "../apis/api";

const Settings = () => {
    const {username, accessToken, walletId, setUsername, updateAccessToken, refreshToken} = useUserStore()

    const [newUsername, setNewUsername] = useState("")

    const handleChange = ({target}) => {
        setNewUsername(target.value)
    }
    const onSubmit = () => {
        if(newUsername && accessToken && walletId){
            updateUsername(walletId, accessToken, newUsername).then(res=> {
                if(res === 200){
                    setUsername(newUsername)
                }
            }).catch(e=> {
                console.log(e)
            })
        }
    }
    return (
        <Box sx={{height: "100%", maxWidth: '500px' ,display: 'flex', flexDirection: 'column', padding: '20px'}}>
            <Typography variant="h4" gutterBottom component="div">{!!username ? username : "You did not set a Username"}</Typography>
            <TextField
                onChange={handleChange}
                label="Username"
                helperText="Change your username here!"
                variant="standard"
                value={newUsername}
            />
            <Button width={'200px'} variant={"contained"} disabled={!newUsername} onClick={onSubmit}>Submit your username</Button>
        </Box>
    );
};

export default Settings;