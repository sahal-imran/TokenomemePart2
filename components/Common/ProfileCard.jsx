import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

function InfoCard() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { lg: "row", xs: "column" },
        maxWidth: "1580px",
        m: "auto",
        mt: "-120px",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Avatar */}
      <Box
        sx={{
          width: "246.74px",
          height: "246.74px",
          background:
            "linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 10px 18px rgba(0, 0, 0, 0.15)",
          position: "relative",
          zIndex: 2,
          p: 1,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            position: "relative",
          }}
        >
          <Image
            src={"/assets/pictures/sahal.png"}
            alt={"picture"}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Link href={"/editprofile"}>
          <IconButton
            sx={{
              position: "absolute",
              bottom: 0,
              right: "30px",
              background: "white",
              "&:hover": { background: "white" },
            }}
          >
            <Image
              src={"/assets/pictures/edit.svg"}
              alt={"edit"}
              width={34.83}
              height={34.83}
              objectFit="contain"
            />
          </IconButton>
        </Link>
      </Box>
      {/* Content */}
      <Box
        sx={{
          width: { lg: "calc(100% - 200px)", xs: "90%" },
          height: { lg: "156.26px", xs: "auto" },
          display: "flex",
          justifyContent: { lg: "space-between", xs: "center" },
          alignItems: "center",
          flexDirection: { lg: "row", xs: "column" },
          boxShadow: {
            lg: "0px 22px 61px rgba(0, 0, 0, 0.05)",
            xs: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          },
          borderRadius: "16px",
          ml: { lg: "-40.76px", xs: "auto" },
          mr: "auto",
          background: "white",
          mt: { lg: 0, xs: "-30px" },
          p: 3,
        }}
      >
        {/* Info */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: { lg: "start", xs: "center" },
            flexDirection: "column",
            ml: { lg: 5 },
            mt: { lg: 0, xs: 2 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "50.08px",
              color: "#211E1E",
              textTransform: "capitalize",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Sahal Imran
            <Box
              sx={{
                position: "relative",
                width: "30px",
                height: "30px",
                ml: 1,
              }}
            >
              <Image
                src={"/assets/pictures/verified.svg"}
                alt={"edit"}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "28.17px",
              color: "#FB8E00",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            @Sahal_Imran777
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "28.17px",
              color: "rgba(15, 15, 14, 0.6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Bangkok
          </Typography>
        </Box>
        {/* Right */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { lg: "row", xs: "row" },
            mt: { md: 0, xs: 3 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: "46.2px",
              }}
              className="GradText2"
            >
              100
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "154%",
                color: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Following
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mx: { sm: 6, xs: 4 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: "46.2px",
              }}
              className="GradText2"
            >
              200k
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "154%",
                color: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Followers
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: "46.2px",
              }}
              className="GradText2"
            >
              400k
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "154%",
                color: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Following
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default InfoCard;
