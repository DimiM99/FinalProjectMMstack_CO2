import React from 'react'
import {makeStyles} from '@material-ui/core'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

const useStyles = makeStyles({
        
        header:{
            position: "absolut",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "15%",
            justifyContent: "space-between",
            alignContent: "center"
        },

        main:{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "85%",
            bottom: 0,
            margin: 0,
            justifyContent: "center"
        },

        side:{
            display: "flex",
            flexDirection: "column",
            width: "15%",
            height: "100%",
            alignContent: "center",
            justifyContent: "space-around",

        },

        sideNav:{
            display: "flex",
            flexDirection: "column",
            width: "15%",
            height: "100%",
            alignContent: "center",
            justifyContent: "flex-start",

        },

        detailedView:{
            width: "70%",
        }
    })

const Layout = (props) => {
    const style = useStyles();
  return (
    <>
        <header className={style.header}>
            <h1>Mega To Do List</h1>
            {props.children[0]}
        </header>

        <main className={style.main}>
            <aside className={style.side}>
                <div className='style.profil'>
                    <AccountCircleIcon/>
                    <h2>Some Dude</h2>
                    <p>some@email.gg</p>
                    <SettingsIcon/>
                </div>

                <div className='style.profil'>
                    <h2>Upcoming</h2>
                    <ol>
                        <li>Do This</li>
                        <li> Do That</li>
                        
                    </ol>
                </div>
            </aside>
        
            <aside className={style.sideNav}>

                <div className='style.profil'>
                    <h2>Upcoming</h2>
                    <ul>
                        <li>Personal</li>
                        <li>Work</li>
                        <li>new Lisr...</li>
                    </ul>
                </div>
            </aside>

            

            <div className={style.detailedView}>
                
                {props.children[1]}
                
                
                
            </div>
        </main>
    </>
  )
}

export default Layout