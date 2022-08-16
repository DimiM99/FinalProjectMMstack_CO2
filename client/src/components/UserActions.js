import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import {Box} from "@mui/material";

export default function IconButtons() {
    return (
        <Box marginTop='10px'>
            <IconButton aria-label="Settings" onClick={ () => { window.location.href = "/settings"; } }>
                <SettingsIcon/>
            </IconButton>
        </Box>
    );
}