import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";

function OverviewUserCard({ ico, Name, Text }) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "500px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        boxShadow: "0px 17.0538px 20.4646px rgba(0, 0, 0, 0.05)",
        borderBottomLeftRadius: "2.72861px",
        borderBottomRightRadius: "2.72861px",
        overflow: "hidden",
        borderBottom: "7px solid #FB8E00",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "209px",
          background:
            "linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9",
        }}
      ></Box>
      {/* Image and name */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: -18,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "154%",
            color: "#FFFFFF",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          {Name}
        </Typography>
        <Box
          sx={{
            width: "170.3px",
            height: "170.3px",
            background: "white",
            borderRadius: "50%",
            p: 0.6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <Image src={ico} alt={"user"} layout="fill" objectFit="cover" />
          </Box>
        </Box>
      </Box>

      {Text ? (
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "35.37px",
            color: "#413C58",
            textAlign: "center",
            textTransform: "unset",
          }}
        >
          {Text}
        </Typography>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            px: { md: 3, xs: 2 },
            mt: 4,
            mb: 8,
          }}
        >
          {/* Texts */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#823AFF",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              LEVEL 21
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#823AFF",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              350/500
            </Typography>
          </Box>
          {/* Bar */}
          <Box
            sx={{
              width: "100%",
              height: "15px",
              background: "#E9E9E9",
              borderRadius: "9.01667px",
              overflow: "hidden",
              mt: 1,
            }}
          >
            <Box
              sx={{
                width: "40%",
                height: "100%",
                background:
                  "linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9",
                borderRadius: "9.01667px",
              }}
            ></Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default OverviewUserCard;
