import * as React from 'react';
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import ListsView from "../components/ListsView";
import TasksView from "../components/TasksView";


export default function MainView() {

    const [selectedList, setSelectedList] = React.useState(null);

    return (
        <Box sx={{height: "100%", display: 'flex', flexDirection: 'row'}}>
            <ListsView selectedList={selectedList} setSelectedList={setSelectedList}/>
            <Divider orientation="vertical" flexItem />
            <TasksView selectedList={selectedList}/>
        </Box>
    );

}