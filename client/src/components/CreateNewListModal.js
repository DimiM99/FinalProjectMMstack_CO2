import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from "react";
import useUserStore from "../store/user";
import {addList} from '../apis/api'

export default function CreateNewListModal({open, setOpen, updated, setUpdated}) {
    const {accessToken, walletId} = useUserStore();
    const [name, setName] = useState('');
    const [listId, setListId] = useState();
    const [color, setColor] = useState();

    const handleSubmit = async () => {
        if (accessToken && walletId && name && color) {
            addList(walletId, name, color, accessToken).then( res => {
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
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />
                


                <InputLabel id="color" sx={{fontSize: '19', marginTop: '20px'}}>Color:</InputLabel>
                <Select
                    lableId="color"
                    label="color"
                    value={color}
                    fullWidth
                    onChange={(e)=> setColor(e.target.value)}
                >
                    <MenuItem value={'green'}>Green</MenuItem>
                    <MenuItem value={'red'}>Red</MenuItem>
                    <MenuItem value={'blue'}>Blue</MenuItem>
                </Select>


            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button disabled={!name && !color} onClick={handleSubmit}>Create</Button>
            </DialogActions>
        </Dialog>
    );
}