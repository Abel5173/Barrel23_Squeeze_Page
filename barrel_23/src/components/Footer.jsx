import { Stack,Grid, Typography, TextField, Button } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'

const Footer = ()=>{

    return(

        <Box mt={2} height={400} sx={{height:300}}>
        
           <Stack direction="row"
               alignItems={'center'}
               justifyContent={'space-around'}>

                    <Box 
                    >
                        <Typography>
                         STAY UP TO,DATE ON THE WORLD'S OLDEST SPRITS
                        </Typography>
                        <Typography>
                         What's old is newer than ever.Receive <br/> updates on product release,news  <br/> events and more.
                        </Typography>
                    </Box>
                    <Box>
                    <form>
                          <Stack direction={'column'}
                                  spacing={1}>
                        <TextField
                        label="Your-full-name"
                        placeholder='name'
                        sx={{width:400}}
                        />
                        <TextField
                        label="your E-mail"
                        placeholder='E-mail'
                        />
                        <Button variant='contained' sx={{width:50}}>Submit</Button>
                          </Stack>
                    </form>
                    </Box>

        </Stack>
        </Box>
        
    )
}

export default Footer;
