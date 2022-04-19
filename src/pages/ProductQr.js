import React from 'react';
import QRCode from 'qrcode.react';
import {useParams} from 'react-router-dom'
import {Button, Box, Container} from '@mui/material'
import { Header } from '../components/Header';
import { useHistory } from 'react-router-dom';
 
export const ProductQrPage = () => {
 
  const {role} = useParams()
  const history = useHistory()
 
  // download QR code
  const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('qrCodeEl')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL)
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  }
 
  return (
      <React.Fragment>
          <Header/>
          <Container sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
            <QRCode
                    id="qrCodeEl"
                    size={250}
                    value={!role ? 'union':role}
                />
            <Button sx={{mt:4}} variant='contained' onClick={downloadQRCode}>Download QR code</Button>
            <Button variant='outlined' sx={{mt:2}}>Back To Home</Button>
          </Container>
         
      </React.Fragment>
    
  );
}
 