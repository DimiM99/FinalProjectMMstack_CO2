import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import UserInfo from "./UserInfo";
import TasksProgress from "./TasksProgress";
import UserActions from "./UserActions";

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
                {/*<List>*/}
                {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
                {/*        <ListItem key={text} disablePadding>*/}
                {/*            <ListItemButton>*/}
                {/*                <ListItemIcon>*/}
                {/*                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                {/*                </ListItemIcon>*/}
                {/*                <ListItemText primary={text} />*/}
                {/*            </ListItemButton>*/}
                {/*        </ListItem>*/}
                {/*    ))}*/}
                {/*</List>*/}
            </Box>
        </Drawer>
    );
}