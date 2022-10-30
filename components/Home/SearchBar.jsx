import React, { useState, useRef, forwardRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import Anchorlink from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function SearchBar(props, ref) {
  return (
    <Box
      sx={{
        width: "95%",
        maxWidth: "277.09px",
        height: "44px",
        background: "linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)",
        borderRadius: "58px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "calc(100% - 1px)",
          height: "calc(100% - 2px)",
          borderRadius: "58px",
          background: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "18.01px",
            height: "18.01px",
          }}
        >
          <Image
            src={"/assets/pictures/search.svg"}
            alt={"ico"}
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box
          sx={{
            width: "calc(100% - 22px)",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            ref={ref}
            type="text"
            style={{
              outline: "none",
              boxShadow: "none",
              background: "transparent",
              fontFamily: "Lato",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19.2px",
              color: "rgba(0, 0, 0, 0.5)",
              width: "100%",
              height: "100%",
              border: "none",
            }}
            placeholder="Search here..."
          />
        </Box>
      </Box>
    </Box>
  );
}

export default forwardRef(SearchBar);
