import {Button, Box, Paper, Grid, Typography} from '@mui/material'
import React from 'react'
import Image from '../Images/History.jpeg'




const History  =  ()=>{



    return(
        <Box  disableGutters={true} maxWidth={'xl'} alignItems={'center'} 
         >
        <Paper    
                    sx={{
                        backgroundImage :`linear-gradient(to bottom,rgba(0,0,0,0) 75% ,rgba(0,0,0,1)), url(${Image})` , 
                        backgroundSize:'cover',
                        hight:400,
                        padding :6,
                        
                        }} >
                <Grid 
                direction="row"
                rowSpacing = {3}
                textAlign={'center'}
                >
                        <Grid  >
                        <Typography variant='h2' textAlign={'center'} color={'white'}>HISTORY,DISTILLED</Typography>
                        </Grid>
                    
                        <Grid >
                        <Button alignItems={'end'} sx={{width: 250,color : "white" , border : "2px solid white"} }variant='outlined' md={{textAlign:'center'}} >$450 | BUY BARREL 23</Button>
                        </Grid>

                
                </Grid>
                

        </Paper>
        </Box>
    )
}

export default History;