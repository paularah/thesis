import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Html5QrcodePlugin from './Html5QcodePlugin'
import { useHistory } from 'react-router-dom';
 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={4} ref={ref} variant="filled" {...props} />;
  });

export const QrScanner = () => {
    const [data, setData] = React.useState('No result');
    const [open, setOpen] = React.useState(false);
    const history = useHistory()
    const onNewScanResult = (decodedText, decodedResult) => {
        setOpen(true)
        setTimeout(() => {history.push('/provenance')}, 5000)
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
    
  return (
    <Box sx={{ width: '100%' }} style={{marginTop:'8px'}}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Successfuly scanned Product QR code!
            </Alert>
        </Snackbar>
      <Grid container justifyContent={'center'} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
          <Html5QrcodePlugin 
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}