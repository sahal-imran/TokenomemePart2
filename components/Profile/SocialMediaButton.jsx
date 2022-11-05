import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Select from "react-select";

function SocialMediaButton({ Title1, Title2, Ico, Text, SocialURL }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: { md: "space-between", xs: "center" },
        alignItems: "center",
        flexDirection: { md: "row", xs: "column" },
        borderBottom: "2px solid rgba(0,0,0,.2)",
        pb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: { md: "start", xs: "center" },
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "39.12px",
            color: "#000000",
            textAlign: { md: "start", xs: "center" },
          }}
        >
          {Title1}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "156.5%",
            color: "gba(15, 15, 14, 0.6)",
            textAlign: { md: "start", xs: "center" },
          }}
        >
          {Title2}
        </Typography>
      </Box>
      <Link
        href={SocialURL}
        variant="contained"
        sx={{
          textDecoration: "none",
          fontFamily: "Montserrat",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "154%",
          color: "white",
          width: "236px",
          height: "49px",
          boxShadow: "none",
          background: "#A5A5A5",
          borderRadius: "6px",
          textTransform: "unset",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 0,
          "&:hover": {
            background: "#A5A5A5",
          },
          mt: { md: 0, xs: 3 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "24px",
            height: "24px",
            mr: 2,
          }}
        >
          <Image src={Ico} alt={"Logo"} layout="fill" objectFit="contain" />
        </Box>
        {Text}
      </Link>
    </Box>
  );
}

export default SocialMediaButton;
