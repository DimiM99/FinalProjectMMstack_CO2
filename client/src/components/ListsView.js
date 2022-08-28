
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {getAllLists,deleteList} from "../apis/api";
import useUserStore from '../store/user';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddIcon from '@mui/icons-material/Add';
import CreateNewListModal from "./CreateNewListModal";
import {useEffect} from "react";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { display } from '@mui/system';


export default function ListsView({selectedList, setSelectedList}) {
    const {walletId, accessToken} = useUserStore();
    const [selectedIndex, setSelectedIndex] = React.useState();
    const [lists, setLists] = React.useState([]);
    const [updated, setUpdated] = React.useState(true);
    const [deleted, setDeleted] = React.useState(true);
    const [open, setOpen] = React.useState(false)

    useEffect(() => {
        getAllLists(walletId, accessToken).then((data) => {
            setLists(data);
        });
    }, [updated, walletId, accessToken, deleted]);

    const handleListItemClick = (event, index, id) => {
        setSelectedIndex(index);
        setSelectedList(id);
    };

    const handleDelete = (event,id)=>{
        deleteList(walletId, id)
        setDeleted(!deleted)
    }

    return (
        <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main">
                {
                    lists.map((list, index) => {
                        return (
                            <>
                                <div sx={{ display: "flex" }} >
                                    <ListItemButton
                                        key={index}
                                        selected={selectedIndex === index}
                                        onClick={(event) => handleListItemClick(event, index, list._id)}
                                    >
                                        <ListItemIcon sx={{minWidth: '0px', paddingRight: '16px', color: list.color}}>
                                            <FormatListBulletedIcon />
                                        </ListItemIcon>

                                        <ListItemText primary={list.name}/>

                                        
                                        <IconButton edge="end" aria-label="delete" onClick={(event) => handleDelete(event,list._id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemButton>

                                </div>

                            </>
                        )
                    })
                }
                <ListItemButton
                    onClick = { () => setOpen(true) }
                >
                    <ListItemIcon sx={{minWidth: '0px', paddingRight: '16px'}}>
                        <AddIcon/>
                    </ListItemIcon>
                    <ListItemText primary="New List" />
                </ListItemButton>
                <CreateNewListModal open={open} setOpen={setOpen} updated={updated} setUpdated={setUpdated}/>
            </List>
        </Box>
    );
}
