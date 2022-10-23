import {Box, Grid} from '@mui/material';
import React,{useState} from 'react';
import {Link,useLocation} from 'react-router-dom';
import {info} from '../utilities/Info';
import './NavbarMachaca.css';

export const NavbarMachaca = ({darkMode,handleClick})=>{
    const location = useLocation();
    const [active,setActive]= useState(location.pathname=='/'?'home':location.pathname.slice(1,location.pathname.length));
    console.log("🚀~file: NavbarMachaca.jsx ~ line 29 ~ NavbarMachaca ~active",active)
    console.log(darkMode);
    return(
        <Grid container component={'nav'}>
            <Grid item xs={8} component={'section'} className={``}>
                {
                    info.links.map(link =>(
                        <Link key={link.active} to={link.to} className={`links ${(link.active === active && !link.type)&& 'active'}`}
                        onClick={()=>setActive(link.active)}>
                            <p className={` ${darkMode? 'dark':'light'}`}>{link.name}</p>
                        </Link>
                    ))
                }
            </Grid>
            <Grid item xs={2} component={'section'}>
                <Box >
                    {
                        darkMode? 
                        <img className='bombilla' onClick={handleClick}
                        src="https://cdn.pixabay.com/photo/2016/03/31/15/29/bulb-1293332_640.png"/>
                        :
                        <img className='bombilla' onClick={handleClick}
                        src="https://cdn.pixabay.com/photo/2016/04/09/16/09/light-bulb-1318335_1280.png"/> 
                    }
                </Box>
            </Grid>
        </Grid>
    )
}