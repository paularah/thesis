import React from  'react'
import { Grid, Typography } from '@mui/material'
import {Header} from '../components/Header'
import { SmallCard, LargeCard, AttachmentCard } from '../components/DashboardCards'


export const PlayerDashboardPage = () => {
    const batch1 = {
        name:'Busy Bee',
        location:'shangi',
        type: 'Polyfloral',
        date:'9th April 2022'
    }
    const batch2 = {
        name:'Busy Bee',
        location:'shangi',
        type: 'Polyfloral',
        date:'9th April 2022'
    }

    const batch3 = {
        name:'The Hive Rwanda Ltd',
        location:'KG 43, Kigali',
        date:'12th April 2022'
    }
    return (
        <React.Fragment>
            <Header headerSpacing={1}/>   
            <Grid container>
                <Grid item container direction={'column'} xs={7} sx={{padding:3}}>
                    <Typography sx={{fontWeight:700}}>Beekeeping Cooperative</Typography>
                    <LargeCard/>
                    <Typography sx={{fontWeight:700, mt:2}}>Beekeeping Union</Typography>
                    <SmallCard  batch={batch1}/>
                     <Typography sx={{fontWeight:700, mt:2}}>Beekeeping Retailer</Typography>
                    <SmallCard batch={batch3}/>
                </Grid>
                <Grid item xs={5}>
                    <AttachmentCard/>
                </Grid>
            </Grid>
        </React.Fragment>
        
    )

}