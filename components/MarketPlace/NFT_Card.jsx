import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

function NFT_Card({ Data }) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: "6.96419px",
          background:
            "linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 0.2,
          transition: "all ease 0.4s",
          "&:hover": {
            boxShadow: "0px 7px 18px rgba(0, 0, 0, 0.16)",
            background: "transparent",
          },
          "&:hover .BUYbtn": {
            border: "1px solid #FB8E00",
            background:
              "linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9",
            color: "white",
            fontWeight: 700,
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "6.96419px",
            background: "white",
            p: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          {/* NFT image */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "300px",
              overflow: "hidden",
              borderRadius: "6.96419px",
            }}
          >
            <Image
              src={Data.imgURL}
              alt={"Logo"}
              layout="fill"
              objectFit="cover"
            />
          </Box>
          {/* Name */}
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "19.5px",
              textTransform: "capitalize",
              mt: 3,
            }}
            className="GradText"
          >
            {Data.Name}
          </Typography>
          {/* Types */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              my: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "14.63px",
                boxShadow: "none",
                background: "#FB8E00",
                borderRadius: "59.1956px",
                minWidth: "54px",
                width: "54px",
                height: "24px",
                p: 0,
                "&:hover": {
                  background: "#FB8E00",
                  boxShadow: "none",
                },
              }}
            >
              #NFT
            </Button>
            <Button
              variant="contained"
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "14.63px",
                boxShadow: "none",
                background: "rgba(0, 0, 0, 0.08)",
                color: " #000000",
                borderRadius: "59.1956px",
                minWidth: "54px",
                width: "54px",
                height: "24px",
                p: 0,
                mx: 1,
                "&:hover": {
                  background: "rgba(0, 0, 0, 0.08)",
                  boxShadow: "none",
                },
              }}
            >
              #NFT
            </Button>
            <Button
              variant="contained"
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "14.63px",
                boxShadow: "none",
                background: "rgba(0, 0, 0, 0.08)",
                color: " #000000",
                borderRadius: "59.1956px",
                minWidth: "54px",
                width: "54px",
                height: "24px",
                p: 0,
                "&:hover": {
                  background: "rgba(0, 0, 0, 0.08)",
                  boxShadow: "none",
                },
              }}
            >
              #NFT
            </Button>
          </Box>
          {/* Price line */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "25.04px",
                  color: "#413C58",
                  textTransform: "capitalize",
                  textAlign: "start",
                  ml: 0.3,
                }}
              >
                Price
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: "10px",
                  lineHeight: "15.65px",
                  color: "#413C58",
                  textTransform: "capitalize",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={"/assets/pictures/eth.svg"}
                  alt={"Logo"}
                  width={16}
                  height={16}
                  objectFit="contain"
                />
                {Data.price}
              </Typography>
            </Box>
            <Image
              src={"/assets/pictures/hammer.svg"}
              alt={"Logo"}
              width={15.86}
              height={15.86}
              objectFit="contain"
            />
          </Box>

          <Button
            className="BUYbtn"
            variant="contained"
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "28.17px",
              color: "#211E1E",
              boxShadow: "none",
              mt: 3,
              mb: 1,
              border: "2px solid #FB8E00",
              background: "white",
              borderRadius: "59.1956px",
              width: "100%",
              height: "51px",
              "&:hover": {
                // background: "#FB8E00",
                boxShadow: "none",
              },
            }}
          >
            Buy Now
          </Button>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 400,
              fontSize: "11px",
              lineHeight: "14.12px",
              color: "#413C58",
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            Estimated Costs : x ETH minting + x ETH gas fees”
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default NFT_Card;
