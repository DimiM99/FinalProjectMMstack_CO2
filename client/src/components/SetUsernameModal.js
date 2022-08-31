import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {updateUsername} from "../apis/api";
import {useState} from "react";
import useUserStore from "../store/user";

export default function SetUsernameModal({open, setOpen, setIsUsernameSet}) {

    const {accessToken, setUsername, walletId} = useUserStore()
    const [newUsername, setNewUsername] = useState('')

    const handleSubmit = async ()=>{
        if(newUsername && accessToken && walletId){
            updateUsername(walletId, accessToken, newUsername).then(res=> {
                if(res === 200){
                    setUsername(newUsername)
                    setOpen(false);
                    setIsUsernameSet(true)
                }
            }).catch(e=> {
                console.log(e)
            })
        }
    }

    return (
            <Dialog open={open}>
                <DialogTitle>Set Username</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your username here.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={newUsername}
                        onChange={(e)=> setNewUsername(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit}>Submit username</Button>
                </DialogActions>
            </Dialog>
    );
}
