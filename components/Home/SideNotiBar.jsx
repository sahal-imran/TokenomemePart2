import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import Anchorlink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Divide as Hamburger } from "hamburger-react";
import Checkbox from "@mui/material/Checkbox";
import { Swiper, SwiperSlide } from "swiper/react";
import IconButton from "@mui/material/IconButton";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

// components
import SuggestionBanner from "./SuggestionBanner";
import NotiCard from "./NotiCard";

function SideNotiBar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        background: "white",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      {/* Info Banner */}
      <SuggestionBanner />

      {/* Notification card */}
      <NotiCard Title={"Home"} IsImage={true} mt={3} />
      <NotiCard Title={"Suggestion"} IsImage={false} mt={3} />
    </Box>
  );
}

export default SideNotiBar;
