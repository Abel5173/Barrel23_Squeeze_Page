import { Box, Button, Paper, Typography ,Container} from '@mui/material'
import { style } from '@mui/system'
import React from 'react'
import Image from './History.jpeg'



const Quote  =  ()=>{

    return(
        <Container  disableGutters={true} maxWidth={'xl'} 
        >
        <Paper  style={{backgroundImage :`url(${Image})`}} justifyItems={'end'}  component = "div"
         sx={{  backgroundPosition:'10vh',
                backgroundSize:'cover',
                hight:400,
                padding:4
               }} >
           <Typography  color={"white"} textAlign={'center'} >
            "Investing in Barrel 21,can be compared with<br/> investing in a piece of history. It's unique,and only <br/>a few have the opportunity to get hold of it."

           </Typography>
            <Typography color={"white"} textAlign={'center'} mt={1}>
            -JOSEPH V MICALLEF,FORBES
            </Typography>           
        </Paper>
        </Container>
    )
}

export default Quote;