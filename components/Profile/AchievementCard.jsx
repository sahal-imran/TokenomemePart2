import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";

function AchievementCard({ ico, Title, Label, Name, progress, points }) {
  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)",
        borderRadius: "12px",
        p: 0.2,
        mt: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: "rgba(244, 233, 230, 1)",
          borderRadius: "10px",
          display: "flex",
          justifyContent: { md: "space-between", xs: "center" },
          alignItems: "center",
          flexDirection: { md: "row", xs: "column" },
          py: 1,
          px: 2,
        }}
      >
        {/* Left */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          {/* img */}
          <Box
            sx={{
              position: "relative",
              width: "132px",
              height: "132px",
            }}
          >
            <Image src={ico} alt={"img"} layout="fill" objectFit="cover" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: { md: "start", xs: "center" },
              flexDirection: "column",
              ml: { md: 3 },
              mt: { md: 0, xs: 3 },
            }}
          >
            {/* Title */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: { md: "20px", xs: "16px" },
                  lineHeight: "24.38px",
                  color: "#FB8E00",
                  textTransform: "uppercase",
                }}
              >
                {Title}
              </Typography>
              <Box
                sx={{
                  background: "rgba(244, 179, 49, 0.47)",
                  px: 1.5,
                  py: 0.8,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "105px",
                  ml: { md: 2, xs: 1 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: { md: "16px", xs: "14px" },
                    lineHeight: "20px",
                    color: "#413C58",
                    textTransform: "capitalize",
                  }}
                >
                  {Label}
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 600,
                fontSize: { md: "25px", xs: "18px" },
                lineHeight: "30px",
                color: "#000000",
                textTransform: "unset",
                textAlign: { md: "start", xs: "center" },
                mt: 1,
              }}
            >
              {Name}
            </Typography>
            {/* progress bar */}
            <Box
              sx={{
                width: { md: "372px", xs: "100%" },
                height: "15px",
                background: "rgba(0,0,0,0.1)",
                borderRadius: "9.01667px",
                overflow: "hidden",
                mt: 1,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: `${progress}`,
                  height: "100%",
                  background:
                    "linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9",
                  borderRadius: "9.01667px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 600,
                  fontSize: "10px",
                  lineHeight: "12px",
                  color: "#000000",
                  textTransform: "unset",
                  position: "absolute",
                  transform: "translate(-50%,-50%)",
                  left: "50%",
                  top: "50%",
                }}
              >
                Next Level: 20
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Right */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: { md: 0, xs: 3 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: 700,
              fontSize: "25px",
              lineHeight: "30px",
              color: "#823AFF",
              textAlign: "center",
            }}
          >
            {points}
            <Box sx={{ color: "#000000" }}>Points</Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AchievementCard;
