import React from  'react'
import { Box, Typography, Container } from '@mui/material'
import { Header } from '../components/Header'
import { QrScanner } from '../components/QrScanner'

export const HomePage = () => {
    return (
        <React.Fragment>
            <Header headerSpacing={4}/>  
            <Box>
                <Typography sx={{textAlign:'center'}} variant='h4' colour='primary'>Honey Supply Chain Provenance Checker</Typography>
                <Typography sx={{textAlign:'center'}}> Scan an QR Code from the label of the product or Upload the QR Code</Typography>
            </Box>
            <Container sx={{maxHeight:50}}>
             <QrScanner/>   
            </Container>   
        </React.Fragment>
    )
}