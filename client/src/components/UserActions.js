import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import {Box} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

export default function IconButtons() {
    let navigate = useNavigate()
    let location = useLocation()
    console.log(location)
    return (
        <Box>
            <IconButton aria-label="Settings" onClick={ () => location.pathname ===  "/settings" ? navigate("/") : navigate("/settings") }>
                {!(location.pathname ===  "/settings") ? (<SettingsIcon/>) : (<HomeIcon/>)}
            </IconButton>
        </Box>
    );
}