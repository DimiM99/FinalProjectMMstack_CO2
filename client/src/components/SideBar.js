import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import UserInfo from "./UserInfo";
import TasksProgress from "./TasksProgress";
import UserActions from "./UserActions";
import Upcoming from './Upcoming';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                paddingTop: 108,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', height: "calc(100% - 108px)" , marginTop: "108px" }
            }}
        >
            <Box sx={{ overflow: 'auto' }}>
                <Box sx={{ padding: '30px', display: 'flex', alignItems: "center", flexDirection: 'column'}}>
                    <UserInfo/>
                    <UserActions/>
                    <TasksProgress/>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', alignItems: "center", flexDirection: 'column', width: '100%'}}>
                    <Upcoming/>
                </Box>
            </Box>
        </Drawer>
    );
}