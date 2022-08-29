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
import {addTask} from '../apis/api'


const CreateNewTaskModal = ({open, setOpen, selectedList, updated, setUpdated}) => {
    const {accessToken, walletId} = useUserStore();
    const [taskHeading, setTaskHeading] = useState('');
    const [timestamp, setTimestamp] = useState();


    const handleSubmit = async () => {
        console.log(accessToken && walletId && taskHeading && selectedList && timestamp)
        if (accessToken && walletId && taskHeading && selectedList && timestamp) {
           console.log("asdfas")
            addTask(walletId, selectedList, taskHeading, false, timestamp, accessToken).then( res => {
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
            <DialogTitle>New Task</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Let's create a new Task
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="Task"
                    label="Task"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={taskHeading}
                    onChange={(e)=> setTaskHeading(e.target.value)}
                />
                
                <TextField
                    autoFocus
                    margin="dense"
                    id="color"
                    label="Timestamp"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={timestamp}
                    onChange={(e)=> setTimestamp(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleSubmit}>Create</Button>
            </DialogActions>
        </Dialog>
    );
}

export default CreateNewTaskModal