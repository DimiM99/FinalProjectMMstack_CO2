import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';




const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.05),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': {
                width: '50ch',
            },
        },
    },
}));

const drawerWidth = 240 - 1;

export default function SearchAppBar() {
    return (
        
        <AppBar sx={{
        height: "108px",
        display: "flex",
        backgroundColor: '#ffffff',
        color: 'rgba(0, 0, 0, 0.87)',
        borderBottom: 'ridge',
        borderBottomWidth: '1px'
        
        
        }} variant="permanent">
             
            <Typography
                variant="h6"
                noWrap
                component="div"
                
                sx={{ 
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                    fontWeight: '600'
                }}
            >
                MEGA TO DO LIST
            </Typography>
        
            
        </AppBar>
    
    );
}