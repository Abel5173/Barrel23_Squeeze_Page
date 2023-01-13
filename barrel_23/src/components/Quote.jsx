import { Box, Button, Paper, Typography ,Container} from '@mui/material'
import { style } from '@mui/system'
import React from 'react'
import Image from '../Images/23_tag_on_glass.jpg'



const Quote  =  ()=>{

    return(
        <Container  disableGutters={true} maxWidth={'xl'} 
        >
        <Paper  style={{}} justifyItems={'end'}  component = "div"
         sx={{  backgroundImage :`linear-gradient(to top,rgba(0,0,0,0) ,rgba(0,0,0,0.9)75%), url(${Image})`,
                backgroundPosition:'100%',
                backgroundSize:'cover',
                hight:400,
                paddingBottom:25,
                paddingTop:4,
                background:'linear-gradient(to left ,top,#430089.#82ffa1)'
               }} >
           <Typography  color={"white"} textAlign={'center'}  >
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