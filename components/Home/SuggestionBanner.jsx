import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function SuggestionBanner() {
  return (
    <Box
      sx={{
        width: "95%",
        maxWidth: "305px",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        flexDirection: "column",
        borderRadius: "8px",
        background: "linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)",
        p: 2,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "24.38px",
          color: "white",
          textTransform: "unset",
        }}
      >
        Top MemeLord
      </Typography>
      <Typography
        sx={{
          fontFamily: "Lato",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "24.64px",
          color: "white",
          textTransform: "unset",
          mt: 1,
        }}
      >
        @bestmemelord
        <br />
        @memeking
        <br />
        @ultimatememereport
      </Typography>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "24.38px",
          color: "white",
          textTransform: "unset",
          mt: 2,
        }}
      >
        Top Collectors3
      </Typography>
      <Typography
        sx={{
          fontFamily: "Lato",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "24.64px",
          color: "white",
          textTransform: "unset",
          mt: 1,
        }}
      >
        @coolcollectors3
      </Typography>
    </Box>
  );
}

export default SuggestionBanner;
