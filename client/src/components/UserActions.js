import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SettingsIcon from '@mui/icons-material/Settings';

export default function IconButtons() {
    return (
        <IconButton aria-label="Settings">
            <SettingsIcon />
        </IconButton>
    );
}
