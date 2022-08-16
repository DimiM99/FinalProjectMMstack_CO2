
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

const Upcoming = () => {
    const [checked, setChecked] = React.useState([0]);

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
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', justifyContent: 'space-between'}}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="FileOpenIcon">
                <FileOpenIcon />
              </IconButton>
            }
            disablePadding
            sx={{width: '100%'}}
          >
            <ListItemButton onClick={handleToggle(value)} dense>
              <ListItemIcon sx={{margin: 0}}>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>

    </Box>
  )
}

export default Upcoming;