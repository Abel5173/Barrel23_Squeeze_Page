// import React from "react";
// // import image from "https://unsplash.com/photos/6R1rq5yTl7g"
// import { Box, createTheme } from "@mui/system";

// export default function ProductDescription(){
//     return(
//       <div>
//         <Box
//         component="img"
//         sx={{
//           height: 233,
//           width: 350,
//           maxHeight: { xs: 233, md: 167 },
//           maxWidth: { xs: 350, md: 250 },
//         }}
//         alt="The house from the offer."
//         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
//       />
    
//     <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"/>
//     </div>
//     )
// }




import React from 'react';

import Paper from '@mui/material/Paper';
import Image from 'src/images/j.jpg'; // Import using relative path


const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};

export default class Home extends React.Component{
    render(){
        return(
            <Paper style={styles.paperContainer}>
                Some text to fill the Paper Component
            </Paper>
        )
    }
}