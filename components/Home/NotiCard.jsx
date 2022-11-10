import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import Anchorlink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";


function NotiCard({ Title, IsSlider, mt }) {
  return (
    <Box
      sx={{
        width: "95%",
        maxWidth: "305px",
        // minHeight: "100px",
        borderRadius: "8px",
        background: "linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: mt,
        p: 0.1,
      }}
    >
      <Box
        sx={{
          width: "100%",
          background: "rgba(244, 233, 230, 1)",
          borderRadius: "7px",
          p: 2,
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24.38px",
            color: "#FB8E00",
            textTransform: "unset",
          }}
        >
          {Title}
        </Typography>
        {IsSlider && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Image
              src={"/assets/pictures/bone_beret.svg"}
              alt={"Logo"}
              width={42.42}
              height={21.17}
              objectFit="contain"
            />
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "18.48px",
                color: "#211E1E",
                textTransform: "unset",
                ml: 1,
              }}
            >
              69000 Krokets
            </Typography>
          </Box>
        )}
        {!IsSlider && (
          <Swiper
            style={{ width: "100%", marginTop: "12px" }}
            slidesPerView={1}
            spaceBetween={0}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "200px",
                  overflow: "hidden",
                  borderRadius: "7px",
                }}
              >
                <Image
                  src={"/assets/pictures/post.svg"}
                  alt={""}
                  layout="fill"
                  objectFit="cover"
                />
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24.38px",
                    color: "#FB8E00",
                    textTransform: "unset",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.2)",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Title
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "200px",
                  overflow: "hidden",
                  borderRadius: "7px",
                }}
              >
                <Image
                  src={"/assets/pictures/post.svg"}
                  alt={""}
                  layout="fill"
                  objectFit="cover"
                />
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24.38px",
                    color: "#FB8E00",
                    textTransform: "unset",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.2)",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Title
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "200px",
                  overflow: "hidden",
                  borderRadius: "7px",
                }}
              >
                <Image
                  src={"/assets/pictures/post.svg"}
                  alt={""}
                  layout="fill"
                  objectFit="cover"
                />
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24.38px",
                    color: "#FB8E00",
                    textTransform: "unset",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.2)",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Title
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "200px",
                  overflow: "hidden",
                  borderRadius: "7px",
                }}
              >
                <Image
                  src={"/assets/pictures/post.svg"}
                  alt={""}
                  layout="fill"
                  objectFit="cover"
                />
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24.38px",
                    color: "#FB8E00",
                    textTransform: "unset",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.2)",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Title
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "200px",
                  overflow: "hidden",
                  borderRadius: "7px",
                }}
              >
                <Image
                  src={"/assets/pictures/post.svg"}
                  alt={""}
                  layout="fill"
                  objectFit="cover"
                />
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24.38px",
                    color: "#FB8E00",
                    textTransform: "unset",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.2)",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Title
                </Typography>
              </Box>
            </SwiperSlide>
          </Swiper>
        )}
      </Box>
    </Box>
  );
}

export default NotiCard;
