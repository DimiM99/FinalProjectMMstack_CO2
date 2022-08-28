import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import {getTaks} from '../apis/api';
import useUserStore from '../store/user';

export default function TasksView({selectedList}) {
    const [checked, setChecked] = React.useState([]);
    const [tasks, setTasks] = React.useState([]);
    const {walletId, accessToken} = useUserStore();

    React.useEffect(() => {
        getTaks(selectedList, walletId, accessToken).then((data) => {
            setTasks(data);
            getTasksStatuses(data)
        });
    }, [selectedList, walletId, accessToken]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };


    const getTasksStatuses = (data) => () => {
        let statueses = data.map( (task) => {
            if (task.status === true) {
                statueses.push(task._id)
            }
        })
        setChecked(statueses)
        console.log(checked)
    };

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
                        <ListItemButton onClick={handleToggle(index)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(task._id) !== 1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': `checkbox-list-label-${index}` }}
                                />
                            </ListItemIcon>
                            <ListItemText primary={task.taskHeading} />
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    );
}