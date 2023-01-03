import React from "react";
import { Box, createTheme } from "@mui/system";
import j from './images/j.jpg'

const styles = {
    paperContainer: {
        backgroundImage: `url(${j})`
    }
}

export default function ProductDescription(){
    return(
        <Box style={{
            backgroundImage: `url(${j})`
        }}></Box>
    )
}