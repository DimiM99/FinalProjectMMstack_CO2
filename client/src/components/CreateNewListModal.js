import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import useUserStore from "../store/user";
import {addNewList} from '../apis/api'

export default function CreateNewListModal({open, setOpen, updated, setUpdated}) {
    const {accessToken, walletId} = useUserStore();
    const [name, setName] = useState('');
    const [listId, setListId] = useState();
    const [color, setColor] = useState();

    const handleSubmit = async () => {
        if (accessToken && walletId && name && listId && color) {
            addNewList(walletId, accessToken, listId, name, color).then( res => {
                if (res === 200) {
                    setOpen(false);
                    setUpdated(!updated)
                }
            })
        }
    }

    const handleCancel = () => {
      setOpen(false);
    }

    return (
        <Dialog open={open}>
            <DialogTitle>New List</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Let's create a new list
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="listId"
                    label="List iD"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={listId}
                    onChange={(e)=> setListId(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="color"
                    label="color"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={color}
                    onChange={(e)=> setColor(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleSubmit}>Create</Button>
            </DialogActions>
        </Dialog>
    );
}