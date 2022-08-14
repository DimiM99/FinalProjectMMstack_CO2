import React from 'react';

import {Avatar, Box, Typography} from "@mui/material";


//user object as props
const UserInfo = () => {
    return (
        <Box display="flex" alignItems="center" flexDirection="column" marginTop='10px'>
        <Avatar src="" />
        <Typography variant="h6">Cool Dude</Typography>
        </Box>
    );
}

export default UserInfo;