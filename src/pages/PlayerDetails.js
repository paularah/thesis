import React from 'react'
import {Box, Typography, TextField, Grid, Button, Container, FormControlLabel, Checkbox} from '@mui/material'
import { Header } from '../components/Header'
import { useHistory } from 'react-router-dom'


export const SupplyChainPlayerDetailsPage = ({role}) => {
    const history = useHistory()
    const handleSubmit = (event) => {
        event.preventDefault()
        history.push('/dashboard')
        //call contract to save user information
    }
    const PlayerRole = role == 'cooperative' ? 'Cooperative' : role == 'union' ? 'Union': 'Retailer'
    return (
        <React.Fragment>
            <Header/>
    <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            {`${PlayerRole} Details`}
          </Typography>
          <Typography>Fill in </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label={`${PlayerRole} Name`}
              name={`${PlayerRole} Name`}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label={`${PlayerRole} Address`}
              name={`${PlayerRole} Adress`}
            />
            <Button
            onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3}}
            >
              Save
            </Button>
            <Button
              type="submit"
              variant='outlined'
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Container>
        </React.Fragment>
    )
}