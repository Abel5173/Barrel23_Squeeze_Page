import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const style = {
    background: 'linear-gradient(rgba(5,5,5,0.85), rgba(225,225,225,0.0))',
    width: 1,
    height: 100,
    pt: 4 ,
    position: 'fixed',
}
const logoStyle = {
    marginLeft: '1em'
}
export default function NavBar(){
    return(
        <Box sx={style}>
            <img style={logoStyle} src="https://www.bhaktaspirits.com/_next/image?url=%2Fassets%2Flogo-bhakta.png&w=384&q=75" width='200'height='65' alt="Just"/>
            <Button sx={{
                '&:hover':{
                    color: '#000',
                    backgroundColor: '#edd766',
                    borderColor: '#edd766'
                },
                height: 40,
                width: 150,
                color: '#edd766',
                border: 3,
                float: "right",
                borderRadius:0,
                mr: 8,
                backgroundColor: "#1E1E1E",
                borderColor: '#edd766'
            }} variant="outlined" disableElevation>Barrel 23</Button>
        </Box>
    )
}