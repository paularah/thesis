import React from 'react'
import { AppBar, Toolbar, Typography, Box, Button, Container} from '@mui/material'
import { logout } from '../services/auth'
import { useHistory } from 'react-router-dom'
import { FlashOnOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'


const SignedIn = (props) => {
    return (
        <Box>
            <Typography sx={{fontWeight:600}}>arah.near</Typography>
            <Button variant='outlined' sx={{backgroundColor:'#FFFFFF'}} onClick={logout}>Logout</Button>
        </Box>
    )
}


export const Header = ({headerSpacing}) =>  {
    const [isSignedIn, setIsSignedIn] = React.useState(false)
    const history = useHistory()

    React.useEffect(() => {
        if (!window.walletConnection.isSignedIn()){
            setIsSignedIn(true)
        }
    }, [isSignedIn])
    return (
        <AppBar position='static' sx={{mb:headerSpacing ? headerSpacing : 5}}>
            <Toolbar>
                <Typography  to='/' sx={{ flexGrow: 1, fontWeight:700, textDecoration:'none', color:'#FFFFFFF' }}>
                    Inzira 
                </Typography>
              {isSignedIn == true ?<Button variant='outlined' sx={{backgroundColor:'#FFFFFF'}} onClick={() => history.push('/auth')}>Sign In</Button>:<SignedIn/>}
            </Toolbar>
        </AppBar>

    )
} 