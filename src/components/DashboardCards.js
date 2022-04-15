import React  from "react";
import { Card, CardContent, Typography, Grid, Container, Box, Avatar, Divider} from "@mui/material";
import {LinkRounded} from '@mui/icons-material'
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { borderRadius } from "@mui/system";

export const LargeCard = (props) => {
    const theme = useTheme();   
    const unionBatch = {
        type:'MonoFloral',
        batchNumber:'13'
    }

    return (
        <Card sx={{backgroundColor:theme.palette.info.light, mb:2}}>
            <CardContent>
                <Typography>{`${unionBatch.type} (Batch ${unionBatch.batchNumber})`}</Typography>
                <Typography></Typography>
            </CardContent>
        </Card>

    )
} 

export const SmallCard = ({batch}) => {
    return (
        <Card sx={{mb:3, textDecoration:'none'}} component={Link}>
            <CardContent>
                <Grid container spacing={8}>
                    <Grid item>
                        <Typography sx={{fontWeight:400}}>{batch.name}</Typography>
                        <Typography>{batch.id}</Typography>
                    </Grid>
                    <Divider color='primary'/>
                    <Grid item>{batch.quanity}</Grid>
                    <Grid item>{batch.location}</Grid>
                    <Grid item>{batch.date}</Grid>
                </Grid>
            </CardContent>

        </Card>

    )

}

export const AttachmentCard = () => {
    const theme = useTheme();
    return (
        <Card sx={{backgroundColor:'#C4C4C4', mt:4}}>
            <CardContent sx={{padding:2}}>
                <Typography sx={{fontWeight:600}}>All Files</Typography>
                <Typography>Attachment</Typography>
                    <Box sx={{display:'flex', alignContent:'flex-start', gap:2, backgroundColor:'white', borderRadius:'5px', padding:.5, mt:4}}>
                        <Avatar>
                            <LinkRounded/>
                        </Avatar>
                        <Typography sx={{mb:2}}>FDA Certification</Typography>
                        <Typography sx={{mb:2}} component={Link} color={theme.palette.primary.light}>View More</Typography>
                    </Box>
            </CardContent>
        </Card>
    )
}


export const ProductCard = (props) => {
    const unionBatch = {
        type:'MonoFloral',
        batchNumber:'13'
    }
    return (
        <Card sx={{backgroundColor:'#C4C4C4'}}>
            <CardContent>
                <Typography>{`${unionBatch.type} (Batch ${unionBatch.batchNumber})`}</Typography>
                <Typography>Description</Typography>
                <Typography sx={{fontWeight:600}}>arah.near</Typography>
                <Box sx={{display:'flex', gap:3}}>
                    <Typography>AB563897MMDDFG</Typography>
                    <Typography>230 KG</Typography>
                </Box>
            </CardContent>
        </Card>
    )
} 