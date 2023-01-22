import React from "react";
import { Typography,Divider, Container } from "@mui/material";
import { Box ,Stack} from "@mui/system";

export default function Quality() {
  const style = {
    fontFamily: "Market Deco",
    fontStyle: "bold",
    // fontWeight: 400,
    fontSize: "24px",
    lineHeight: "90%",
    letterSpacing: "-0.06em",
    color: "#FFFFFF",
  };
  const style1 = {
    height: "29px",
    fontFamily: "Libre Franklin",
    fontStyle: "normal",
    // fontWeight: 500,
    // fontSize: "24px",
    lineHeight: "29px",
    textAlign: "start",
    color: "#FFFFFF",
  };
  return (

    <Container  maxWidth= {'lg'} >

    <Stack
        direction={{ xs: 'column', sm: 'row' }} gap={2} columnGap={2}
     
        divider={<Divider  variant={'fullWidth'} sx={{backgroundColor:'white' }}  orientation="vertical" flexItem wrapperVertical />}
        spacing={{ xs: 0, sm: 0, md: 4 }}
        mr={{sx : 5 ,sm : 2}}
    >


    <Container  >

      <Typography
        
        sx={{
          height: "43px",
          fontFamily: "Market Deco",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "40px",
          lineHeight: "90%",
          letterSpacing: "-0.06em",
          color: "#FFFFFF",
        }}
      >
        Product Specs

      </Typography>
    </Container>
    <Stack direction={'column'} gap = {0} mr={6} 
        spacing={{ xs: 0, sm: 0, md: 4 }}

                        >

      <Container >
      <Typography
          variant="h5.subtitle1"
          sx={{
            display: "flex",
            alignItems: "flex-end",
            textAlign: "start",
            letterSpacing: "-0.06em",
            color: "#FFFFFF",
          }}
        >
          50
        </Typography>
      </Container>

      <Container >
      <Typography
          style={style}

          sx={{
            width: "129px",
            fontFamily: "Libre Franklin",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "29px",
            textAlign: "start",
            color: "#FFFFFF",
          }}
        >
          Years Aged
        </Typography>
      </Container>

     <Container >
     <Typography
            variant="h5.subtitle1"
            style={style}
            sx={{
      
              display: "flex",
              alignItems: "flex-end",
              textAlign: "start",
              letterSpacing: "-0.06em",
              color: "#FFFFFF",
            }}
          >
            Condom, FR
          </Typography>
     </Container>

          <Container >
          <Typography
            style={style1}
          >Bottled in</Typography>
          </Container>

    </Stack>

    <Stack  direction={'column'} gap = {0} mr={3}
        spacing={{ xs: 0, sm: 0, md: 4 }}
    
    >

   <Container >
   <Typography
          variant="h5.subtitle1"
          sx={{
            display: "flex",
            alignItems: "flex-end",
            textAlign: "start",
            letterSpacing: "-0.06em",
            color: "#FFFFFF",
          }}
        >
          96.4
        </Typography>
   </Container>

        <Container >

        <Typography
          sx={{
            width: "129px",
            height: "29px",
            fontFamily: "Libre Franklin",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "29px",
            textAlign: "start",
            color: "#FFFFFF",
          }}
        >
          Proof
        </Typography>
        </Container>

        <Container >
        <Typography
            variant="h5.subtitle1"
            style={style}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              textAlign: "start",
              letterSpacing: "-0.06em",
              color: "#FFFFFF",
            }}
          >
            Islay
          </Typography>

        </Container>
         <Container >
          <Typography
            style={style1}
            sx={{
            }}
          >Finish</Typography>
          </Container>

    </Stack>

    
          <Stack direction={'column'} gap = {0} mr={4} 
        spacing={{ xs: 0, sm: 0, md: 4 }}
          >

         <Container >

         <Typography
          variant="h5.subtitle1"
          sx={{
        
            display: "flex",
            alignItems: "flex-end",
            textAlign: "start",
            letterSpacing: "-0.06em",
            color: "#FFFFFF",
          }}
        >
          80
        </Typography>
         </Container>

        <Container  >
        <Typography
          sx={{
            width: "129px",
            height: "29px",
            fontFamily: "Libre Franklin",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "29px",
            textAlign: "start",
            color: "#FFFFFF",
          }}
        >
          No. Bottles
        </Typography>

        </Container>
        <Container maxWidth={'sm'}>

        <Typography
            variant="h5.subtitle1"
            style={style}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              textAlign: "start",
              letterSpacing: "-0.06em",
              color: "#FFFFFF",
            }}
          >750</Typography>
        </Container>

         <Container >
         <Typography
            style={style1}
          >mL</Typography>
         </Container>

          
          </Stack>
          

   
    </Stack>

    </Container>

  );
}
