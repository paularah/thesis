import * as React from 'react';
import { Header } from "../components/Header"
import { Typography, Button, Box, Container, Grid, Stack } from "@mui/material"
import {login} from '../services/auth'

export const AuthPage = () => {
    const handleLogin = () => {
        login('http://localhost:1234/dashboard', 'http://localhost:1234/')
        //get user role and updpate the context here 
    }

    const handleCooperativeSignUp = () => {
        login('http://localhost:1234/details', 'http://localhost:1234')
        //call contract to create role with the account id 
    }

    const handleUnionSignUp = () => {
        login('http://localhost:1234/details', 'http://localhost:1234')
        //call contract to create role with the account id 

    }
    const handleRetailerSignUp = () => {
        login('http://localhost:1234/details', 'http://localhost:1234')
        //call contract to create role with the account id s

    }

    return (
        <>
        <Header/>
        <Container sx={{display:'flex', alignContent:'center', justifyContent:'center'}}>
            <Box sx={{mt:6}}>
                <Typography variant="h2" textAlign={'center'}>
                Rwanda Honey Supply Chain Provenance App  
                </Typography>
                <Typography textAlign={'center'} sx={{mt:3, mb:5}}>Register or sign up by connecting your Near wallet </Typography>
                <Grid container item direction={'column'} alignContent={'center'}>
                    <Button variant='contained' onClick={handleLogin}>Sign In</Button>
                    <Typography textAlign={'center'} sx={{mt:4, mb:4}}>OR</Typography>
                </Grid>  
            </Box>
            <Container sx={{display:'flex', mt:15, padding:10, flexDirection:'column', gap:2}}>
                <Button variant='contained' onClick={handleCooperativeSignUp}>Sign up as a Cooporative</Button>
                <Button variant='contained' onClick={handleUnionSignUp}>Sign up as a Union</Button>
                <Button variant='contained' onClick={handleRetailerSignUp}>Sign up as a Customer</Button>
            </Container>
        </Container>
        </>
    )

}