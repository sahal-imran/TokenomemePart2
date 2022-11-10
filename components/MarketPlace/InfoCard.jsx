import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";

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
        px:2
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
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 10px 18px rgba(0, 0, 0, 0.15)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            width: "238px",
            height: "238px",
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <Image
            src={"/assets/pictures/logo.svg"}
            alt={"Logo"}
            width={149.89}
            height={156.26}
            objectFit="contain"
          />
        </Box>
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
              textAlign: { lg: "start", xs: "center" },
            }}
          >
            Tokenmeme Marketplace
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { lg: "row", xs: "column" },
            }}
          >
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
              Items{" "}
              <Box component={"span"} sx={{ color: "#FB8E00", ml: 0.5 }}>
                9.9k
              </Box>
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
                ml: { lg: 2 },
                my: { lg: 0, xs: 1 },
              }}
            >
              Created{" "}
              <Box component={"span"} sx={{ color: "#FB8E00", ml: 0.5 }}>
                Dec 2022
              </Box>
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
                ml: { lg: 2 },
              }}
            >
              Creator Fee{" "}
              <Box component={"span"} sx={{ color: "#FB8E00", ml: 0.5 }}>
                0%
              </Box>
            </Typography>
          </Box>
        </Box>
        {/* offer/Right */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { lg: "row", xs: "column" },
            mt: { md: 0, xs: 3 },
          }}
        >
          {/* Left */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Volumn */}
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
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "22.56px",
                  color: "#000000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={"/assets/pictures/eth.svg"}
                  alt={"Logo"}
                  width={17.15}
                  height={17.15}
                  objectFit="contain"
                />
                <Box component={"span"} sx={{ ml: 0.5 }}>
                  6999
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "16.92px",
                  color: "#823AFF",
                }}
              >
                Total Volume
              </Typography>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: "1px",
                height: "40px",
                background: "rgba(0,0,0,0.2)",
                mx: 2,
              }}
            ></Box>

            {/* Floor price */}
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
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "22.56px",
                  color: "#000000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={"/assets/pictures/eth.svg"}
                  alt={"Logo"}
                  width={17.15}
                  height={17.15}
                  objectFit="contain"
                />
                <Box component={"span"} sx={{ ml: 0.5 }}>
                  1.4
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "16.92px",
                  color: "#823AFF",
                }}
              >
                Total Volume
              </Typography>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: "1px",
                height: "40px",
                background: "rgba(0,0,0,0.2)",
                mx: 2,
              }}
            ></Box>

            {/* up price */}
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
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "22.56px",
                  color: "#000000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={"/assets/pictures/eth.svg"}
                  alt={"Logo"}
                  width={17.15}
                  height={17.15}
                  objectFit="contain"
                />
                <Box component={"span"} sx={{ ml: 0.5 }}>
                  1.21
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "16.92px",
                  color: "#823AFF",
                }}
              >
                Total Volume
              </Typography>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: "1px",
                height: "40px",
                background: "rgba(0,0,0,0.2)",
                mx: 2,
                display: { md: "block", xs: "none" },
              }}
            ></Box>
          </Box>

          {/* Middle */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              my: { lg: 0, xs: 2 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "22.56px",
                color: "#000000",
                textAlign: "center",
              }}
            >
              ----
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "16.92px",
                color: "#823AFF",
              }}
            >
              Best Offer
            </Typography>
          </Box>

          {/* Right */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Divider */}
            <Box
              sx={{
                width: "1px",
                height: "40px",
                background: "rgba(0,0,0,0.2)",
                mx: 2,
                display: { md: "block", xs: "none" },
              }}
            ></Box>

            {/* Listed */}
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
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "22.56px",
                  color: "#000000",
                }}
              >
                4%
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "16.92px",
                  color: "#823AFF",
                }}
              >
                Listed
              </Typography>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: "1px",
                height: "40px",
                background: "rgba(0,0,0,0.2)",
                mx: 2,
              }}
            ></Box>

            {/* Owner */}
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
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "22.56px",
                  color: "#000000",
                }}
              >
                2,018
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "16.92px",
                  color: "#823AFF",
                }}
              >
                Owner
              </Typography>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: "1px",
                height: "40px",
                background: "rgba(0,0,0,0.2)",
                mx: 2,
              }}
            ></Box>

            {/* Unique Owner */}
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
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "22.56px",
                  color: "#000000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                20%
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "16.92px",
                  color: "#823AFF",
                }}
              >
                Unique Owner
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default InfoCard;
