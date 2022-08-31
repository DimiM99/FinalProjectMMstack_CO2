import React from 'react';
import AppBar from "../components/AppBar"
import Box from "@mui/material/Box";
import SideBar from "../components/SideBar"
import { Routes, Route } from "react-router-dom"
import Settings from "../components/Settings";
import MainView from "./MainView";
import Test from "../components/test"

const Overview = () => {
    return (
        <Box sx={{height: "100%"}}>
            <AppBar sx/>
            <SideBar/>
            <Box variant="permanent" sx={{ position: "absolute", height: "calc(100% - 108px)", width: "calc(100% - 240px)", left: 240, top: 108}}>
                <Routes>
                   <Route path="/" element={ <MainView/> } />
                   <Route path="/settings" element={ <Settings/> } />
                   <Route path="/test" element={ <Test/> } />
                </Routes>
            </Box>
        </Box>
    );
};

export default Overview;
