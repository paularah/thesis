import React from 'react'
import { Box, Grid, Button, Container, Typography, TextField, FormControl, InputLabel, Select,MenuItem } from '@mui/material'
import FileUpload from 'react-material-file-upload';
import {Header} from '../components/Header'

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { borderColor } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export const NewChainInfo = () => {
    const [honeyType, setHoneyType] = React.useState('Blended')
    const handleChange = (event) => {
        setHoneyType(prevType => event.target.value)
    }
    const [files, setFiles] = React.useState([]);
    return (
        <React.Fragment>
            <Header headerSpacing={1}/>
            <Grid container direction='row' spacing={1} sx={{mt:2}}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4} justifyContent='flex-start'>
                    <Container sx={{display:'flex', justifyContent:'center', alignContent:'center', flexDirection:'column'}}>
                        <Typography variant='h5' sx={{textAlign:'center'}}>Product Information</Typography>
                        <Typography sx={{mb:1}} variant='p'>Fill in the form to provide necessary information</Typography>
                        <Box sx={{border:1, padding:1}}>
                            <TextField
                            sx={{mb:1}}
                            required
                            size='small'
                            fullWidth
                            id='recipient'
                            label='Recipient Account ID'
                            name='Recipient Account ID'
                            />
                             <TextField
                            sx={{mb:1}}
                            required
                            size='small'
                            fullWidth
                            id='batch'
                            label='Batch Number'
                            name='Batch Number'
                            />
                             <TextField
                            sx={{mb:1}}
                            required
                            size='small'
                            fullWidth
                            id='quantity'
                            label='Quantity'
                            name='Quantity'
                            />
                             <FormControl sx={{mb:2}} fullWidth size='small'>
                                <InputLabel id="demo-simple-select-label">Honey Type</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={honeyType}
                                label="Honey Type"
                                onChange={handleChange}
                                >
                                <MenuItem value={'Blended'}>Blended</MenuItem>
                                <MenuItem value={'Polyfloral'}>Polyfloral</MenuItem>
                                <MenuItem value={'Monofloral'}>Monofloral</MenuItem>
                                </Select>
                             </FormControl>
                             <Box sx={{mb:1}}>
                                 <Typography>Upload Document</Typography>
                                 <TextField
                                    sx={{mb:1}}
                                    required
                                    size='small'
                                    fullWidth
                                    id='attachment'
                                    label='Document Description'
                                    name='Attachment Name'
                                    />
                                    <FileUpload value={files} onChange={setFiles} />
                             </Box>
                             <Button variant='contained' fullWidth>Submit</Button>
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={4}>
                    <Container sx={{mt:7}}>
                        <Button variant='contained' sx={{mr:1}}>Scan QR Code</Button>
                        <Button variant='contained'>Add Product</Button>
                    </Container>
                </Grid>
            </Grid>
        </React.Fragment>

    )
}

