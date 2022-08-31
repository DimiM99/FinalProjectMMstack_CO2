import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';
import {getTaks, deleteTask, checkTask} from '../apis/api';
import useUserStore from '../store/user';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CreateNewTaskModal from "./CreateNewTaskModal";

export default function TasksView({selectedList}) {
    const [checked, setChecked] = React.useState([]);
    const [tasks, setTasks] = React.useState([]);
    const {walletId, accessToken} = useUserStore();
    const [updated, setUpdated] = React.useState(true);
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        getTaks(selectedList, walletId, accessToken).then((data) => {
            setTasks(data);
            
        });
    }, [selectedList, walletId, updated, accessToken]);

    const handleToggle = (id) => () => {
        
        if (walletId&& accessToken&& selectedList&& id){
            checkTask(walletId, accessToken, selectedList, id).then(()=>{
                setUpdated(!updated);
            });
        }

    };



    const handleDelete = (event,id)=>{
        deleteTask(walletId, selectedList, id, accessToken).then(()=>{
            setUpdated(!updated);
        });
        
    }

    //placehoder design for now
    if (!selectedList) {
        return (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemText primary="No list selected" />
                </ListItem>
            </List>
        );
    }

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {tasks.map((task, index) => {
                return (
                    
                    <ListItem key={index} disablePadding>
                        <ListItemButton sx={{marginRight: '30px',}} dense onClick={handleToggle(task._id)} >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={task.status}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': `checkbox-list-label-${index}` }}
                                />
                            </ListItemIcon>
                            <ListItemText primary={task.taskHeading} />
                            <ListItemText primary={task.expirationTimestamp} />
                            <IconButton edge="end" aria-label="delete" onClick={(event) => handleDelete(event,task._id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemButton>
                    </ListItem>
                    
                )
            })}

            <ListItemButton
                onClick = { () => setOpen(true) }
                >
                    <ListItemIcon sx={{minWidth: '0px', paddingRight: '16px'}}>
                        <AddIcon/>
                    </ListItemIcon>
                    <ListItemText primary="New Task" />
            </ListItemButton>
            <CreateNewTaskModal open={open} setOpen={setOpen} selectedList={selectedList} updated={updated} setUpdated={setUpdated}/>

        </List>
    );
}