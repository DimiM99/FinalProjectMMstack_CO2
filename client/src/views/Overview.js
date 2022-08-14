import React from 'react';
import AppBar from "../components/AppBar"
import Box from "@mui/material/Box";
import SideBar from "../components/SideBar"
import { Routes, Route } from "react-router-dom"

function ListOverview() {
    return "ListOverview";
}
function Settings() {
    return "Settings";
}

const Overview = () => {
    return (
        <Box sx={{background: "aliceblue", height: "100%"}}>
            <AppBar/>
            <SideBar/>
            <Box sx={{ position: "absolute", height: "calc(100% - 108px)", width: "calc(100% - 240px)", left: 240, top: 108}}>
                <Routes>
                   <Route path="/" element={ <ListOverview/> } />
                   <Route path="/settings" element={ <Settings/> } />
                </Routes>
            </Box>
        </Box>
    );
};

export default Overview;
