import React from 'react'
import {Typography, Paper, Grid, Button, Box} from '@mui/material'
import { styled } from '@mui/material/styles';
import { Header } from '../components/Header'
import { ProductCard } from '../components/DashboardCards'
import { useHistory } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  



const PlayerProducts = ({products}) => {

    return (
        <Grid container justifyContent={'center'} sx={{paddingLeft:2}} alignContent='flex-start'  spacing={2}>
            {products.map((index, product) => {
                return (
                    <Grid item key={index}>
                        <Item>
                            <ProductCard product={product}/>
                        </Item>
                    </Grid>
                )
            })}
        </Grid>
    )
}

const NoProducts = () => {
    return (
        <React.Fragment>
            <Typography sx={{display:'flex', alignContent:'center', justifyContent:'center'}} variant={'h3'}>You have no available Products</Typography>
        </React.Fragment>
    )
}

export const PlayerProductPage = () => {
    const products = [{name:'test'}, {}, {}, {}, {}]
    const history = useHistory()
    return (
       <React.Fragment>
           <Header headerSpacing={3}/>
           <Box sx={{display:'flex', gap:2, ml:100, mb:3, alignContent:'flex-end', }} >
               <Button variant='contained' onClick={() => history.push('/')}>Scan QR Code</Button>
               <Button variant='contained' onClick={() => history.push('/new')}>Add new Batch</Button>
           </Box>
        {products.length < 1 ? <NoProducts/> : <PlayerProducts products={products}/>}
       </React.Fragment>
    )
}

