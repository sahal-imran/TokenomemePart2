import React, { useState, useRef, forwardRef } from "react";
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
import IconButton from "@mui/material/IconButton";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Drawer from "react-modern-drawer";
//import styles 👇
import "react-modern-drawer/dist/index.css";

import SearchBar from "./SearchBar";

function SideFilterBar(props, ref) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      {/* Search bar */}
      <SearchBar ref={ref} />

      {/* Filter */}
      <Box sx={{ width: "100%", mt: 2 }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#FB8E00" }} />}
            sx={{ borderBottom: "1.12102px solid rgba(15, 15, 14, 0.1)" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "35.87px",
                  height: "35.87px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9",
                  borderRadius: "4.48408px",
                }}
              >
                <Image
                  src={"/assets/pictures/filter.svg"}
                  alt={"Logo"}
                  width={14.95}
                  height={9.34}
                  objectFit="contain"
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "21.94px",
                  color: "#FB8E00",
                  textTransform: "unset",
                  ml: 1,
                }}
              >
                Filter
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
              {props.Filters?.map((item, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={item.Current_State}
                        onChange={(e) => item.Change_f(e.target.checked)}
                        sx={{
                          "&.Mui-checked": {
                            color: "#FB8E00",
                          },
                        }}
                      />
                    }
                    label={item.Name}
                    sx={{
                      color: "rgba(15, 15, 14, 0.5)",
                      fontFamily: "Lato",
                      fontWeight: "400",
                      fontSize: "18px",
                      lineHeight: "22px",
                    }}
                  />
                );
              })}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Communities */}
      <Box sx={{ width: "100%", mt: 3 }}>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#FB8E00" }} />}
            sx={{ borderBottom: "1.12102px solid rgba(15, 15, 14, 0.1)" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "35.87px",
                  height: "35.87px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9",
                  borderRadius: "4.48408px",
                }}
              >
                <Image
                  src={"/assets/pictures/Communities.svg"}
                  alt={"Logo"}
                  width={22.42}
                  height={22.42}
                  objectFit="contain"
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "21.94px",
                  color: "#FB8E00",
                  textTransform: "unset",
                  ml: 1,
                }}
              >
                Communities
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
              {props.Communities?.map((item, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={item.Current_State}
                        onChange={(e) => item.Change_f(e.target.checked)}
                        sx={{
                          "&.Mui-checked": {
                            color: "#FB8E00",
                          },
                        }}
                      />
                    }
                    label={item.Name}
                    sx={{
                      color: "rgba(15, 15, 14, 0.5)",
                      fontFamily: "Lato",
                      fontWeight: "400",
                      fontSize: "18px",
                      lineHeight: "22px",
                    }}
                  />
                );
              })}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Collections */}
      <Box sx={{ width: "100%", mt: 3 }}>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#FB8E00" }} />}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "35.87px",
                  height: "35.87px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={"/assets/pictures/collection.svg"}
                  alt={"Logo"}
                  width={22.42}
                  height={22.42}
                  objectFit="contain"
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "21.94px",
                  color: "#FB8E00",
                  textTransform: "unset",
                  ml: 1,
                }}
              >
                Collections
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
              {props.Communities?.map((item, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={item.Current_State}
                        onChange={(e) => item.Change_f(e.target.checked)}
                        sx={{
                          "&.Mui-checked": {
                            color: "#FB8E00",
                          },
                        }}
                      />
                    }
                    label={item.Name}
                    sx={{
                      color: "rgba(15, 15, 14, 0.5)",
                      fontFamily: "Lato",
                      fontWeight: "400",
                      fontSize: "18px",
                      lineHeight: "22px",
                    }}
                  />
                );
              })}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Button
        variant="contained"
        sx={{
          width: "264.16px",
          height: "44px",
          background:
            "linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)",
          borderRadius: "60px",
          boxShadow: "none",
          fontFamily: "Montserrat",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "154%",
          color: "#FFFFFF",
          p: 0,
          textTransform: "uppercase",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {},
          mt: 3,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "22px",
            height: "23px",
            cursor: "pointer",
            mr: 1,
          }}
        >
          <Image
            src={"/assets/pictures/rhombus.svg"}
            alt={"Logo"}
            layout="fill"
            objectFit="contain"
          />
        </Box>
        ADD FEEDS
      </Button>

      {/* Help */}
      <Button
        variant="text"
        sx={{
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
          fontFamily: "Montserrat",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "154%",
          color: "#823AFF",
          textTransform: "capitalize",
          alignSelf: "start",
          position: "absolute",
          bottom: "10px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "17.94px",
            height: "17.94px",
            mr: 1,
          }}
        >
          <Image
            src={"/assets/pictures/help.svg"}
            alt={"Logo"}
            layout="fill"
            objectFit="contain"
          />
        </Box>
        Help
      </Button>
    </Box>
  );
}

export default forwardRef(SideFilterBar);
