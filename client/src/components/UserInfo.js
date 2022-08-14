import React from 'react';
import {Avatar, Box, Typography} from "@mui/material";
import useUserStore from "../store/user";


const UserInfo = () => {
    const { username, walletId } = useUserStore()
    return (
        <Box display="flex" alignItems="center" flexDirection="column" marginTop='10px'>
        <Avatar sx={{ width: 92, height: 92 }} src="" alt={!!username ? username : walletId} >{(!!username ? username : walletId)?.substring(0,2)}</Avatar>
        <Typography sx={{mt: 1}} variant="h6">{!!username ? username : walletId }</Typography>
        </Box>
    );
}

export default UserInfo;