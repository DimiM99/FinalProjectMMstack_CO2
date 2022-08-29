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
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';


const CreateNewTaskModal = ({open, setOpen, selectedList, updated, setUpdated}) => {
    const {accessToken, walletId} = useUserStore();
    const [taskHeading, setTaskHeading] = useState('');
   
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));


    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleSubmit = async () => {
        const v = value.date
        console.log(v)
        if (accessToken && walletId && taskHeading && selectedList && value) {
           console.log("asdfas")
            addTask(walletId, selectedList, taskHeading, false, (value.toISOString()), accessToken).then( res => {
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
                <DialogContentText sx={{marginBottom: "10px"}}>
                    Let's create a new Task:
                </DialogContentText>
                <TextField sx={{marginBottom: "30px"}}
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
                

                <LocalizationProvider  dateAdapter={AdapterDayjs}>
                    <Stack spacing={3}>
                        <DesktopDatePicker 
                        label="Date desktop"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    

                        <TimePicker
                            label="Time"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleSubmit}>Create</Button>
            </DialogActions>
        </Dialog>
    );
}

export default CreateNewTaskModal