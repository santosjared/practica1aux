import React,{useState}from 'react';
import {Box, Grid} from '@mui/material';
import { NavbarMachaca } from './NavbarMachaca';
import { Routes, Route } from 'react-router-dom';
import { HomeMachaca} from '../components/home/HomeMachaca';
import {AboutMachaca} from '../components/about/AboutMachaca';
import './RoutesLayoutMachaca.css';
export const RoutesLayoutMachaca = ()=>{
    const[darkMode,setDarkmode]= useState(true);
    console.log("ejecutando la funcion rutas");
    function handleClick(){
        setDarkmode(!darkMode);
    }
    return(
        <Grid container spacing={1} className={`content ${darkMode? 'dark':'light'}`}>
            <Grid item xs = {11} component = {'header'} className={`${darkMode? 'dark':'light'}`}>
                <NavbarMachaca darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item xs={11} className={`container-content ${darkMode? 'dark':'light'}`}>
                <Routes>
                    <Route exact path={'/'} element={<HomeMachaca/>}/>
                    <Route exact path={'/about'} element={<AboutMachaca/>}/>
                </Routes>
            </Grid>
            <Grid item xs={11} component={'footer'}>
                <Box className={`${darkMode? 'dark':'light'} text-footer`}>
                    <p>templete creat a with &hearts; by <a target={'_blank'} href={'https://es.reactjs.org'}>react js</a></p>
                    <p>&copy; 2022</p>
                </Box>
            </Grid>
        </Grid>
    )
}