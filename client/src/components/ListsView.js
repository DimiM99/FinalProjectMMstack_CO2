
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useUserStore from "../store/user";

export default function ListsView() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const { data } = useUserStore()

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
                {/*example of a list item with a button*/}
                <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemText primary="Spam" />
                </ListItemButton>
                {/*{data.lists.map((item, index) => (*/}
                {/*    <ListItemButton*/}
                {/*        key={item.id}*/}
                {/*        button*/}
                {/*        selected={index === selectedIndex}*/}
                {/*        onClick={(event) => handleListItemClick(event, index)}*/}
                {/*    >*/}
                {/*        <ListItemText primary={item.name} />*/}
                {/*    </ListItemButton>*/}
                {/*))}*/}
            </List>
        </Box>
    );
}
