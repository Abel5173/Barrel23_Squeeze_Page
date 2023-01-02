import { Stack,Grid, Typography, TextField, Button } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'

const Footer = ()=>{

    return(

        <Box mt={2}>
        
           <Stack direction="row"
               alignItems={'center'}
               justifyContent={'space-around'}>

                    <Box 
                    >
                        <Typography>
                         STAY UP TO,DATE ON THE WORLD'S OLDEST SPRITS
                        </Typography>
                    </Box>
                    <Box>
                    <form>
                          <Stack direction={'column'}
                                  spacing={1}>
                        <TextField
                        label="Your-full-name"
                        placeholder='name'
                        />
                        <TextField
                        label="your E-mail"
                        placeholder='E-mail'
                        />
                        <Button variant='contained'>Submit</Button>
                          </Stack>
                    </form>
                    </Box>

        </Stack>
        </Box>
        
    )
}

export default Footer;