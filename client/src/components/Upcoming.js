
import React from 'react'
import {Box, Typography} from '@mui/material';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import useUserStore from "../store/user";

const Upcoming = () => {
    const [checked, setChecked] = React.useState([0]);
    const { upcomingTasks } = useUserStore()
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

        
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
        <Typography sx={{mt: 1, marginBottom: '10px'}} variant="h6">Upcoming</Typography>
        <List sx={{ width: '100%', backgroundgcolor: 'background.paper'}}>
      {upcomingTasks.map(({taskHeading, expirationTimestamp}) => {

        return (
          <ListItem

            disablePadding
            sx={{width: '100%'}}
          >
              <ListItemText primary={`${taskHeading} | Due by: ${new Date(expirationTimestamp).toISOString()}`} />
          </ListItem>
        );
      })}
    </List>

    </Box>
  )
}

export default Upcoming;