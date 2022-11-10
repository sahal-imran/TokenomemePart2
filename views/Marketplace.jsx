import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import WindowIcon from "@mui/icons-material/Window";
import AppsIcon from "@mui/icons-material/Apps";

// components
import InfoCard from "../components/MarketPlace/InfoCard";
import NFT_Card from "../components/MarketPlace/NFT_Card";

function Marketplace() {
  const AppliedFilters = [
    {
      Name: "Pharetr",
      isActive: true,
    },
    {
      Name: "Nam",
      isActive: false,
    },
    {
      Name: "Lobortis",
      isActive: false,
    },
    {
      Name: "Eget",
      isActive: false,
    },
    {
      Name: "Neque",
      isActive: false,
    },
  ];

  // Accordian
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //   Category filters
  // Filters
  const [All, setAll] = useState(false);
  const [Reddit, setReddit] = useState(false);
  const [Gap9, setGap9] = useState(false);
  const [Funny, setFunny] = useState(false);
  const [Top, setTop] = useState(false);
  const [Trending, setTrending] = useState(false);

  const Category_Filters = [
    {
      Name: "All",
      Current_State: All,
      Change_f: setAll,
    },
    {
      Name: "Reddit",
      Current_State: Reddit,
      Change_f: setReddit,
    },
    {
      Name: "9gap",
      Current_State: Gap9,
      Change_f: setGap9,
    },
    {
      Name: "Funny",
      Current_State: Funny,
      Change_f: setFunny,
    },
    {
      Name: "Top",
      Current_State: Top,
      Change_f: setTop,
    },
    {
      Name: "Trending",
      Current_State: Trending,
      Change_f: setTrending,
    },
  ];

  //   price dropdown
  const [Price, setPrice] = React.useState("");

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  //   Views States
  const [GridView, SetGridView] = useState(true);
  const [AppView, SetAppView] = useState(false);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "281px",
            position: "relative",
          }}
        >
          <Image
            src={"/assets/pictures/banner.svg"}
            alt={"Logo"}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <InfoCard />

        {/* main content */}
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            mt: 10,
            maxWidth: "1600px",
            mx: "auto",
            position: "relative",
            zIndex: 10,
            px: { md: 2, xs: 2 },
            pb: 4,
          }}
        >
          <Grid container spacing={{ md: 2 }}>
            {/* Left bar */}
            <Grid
              item
              xs={0}
              md={3}
              sx={{
                display: { lg: "flex", xs: "none" },
                justifyContent: "start",
                alignItems: "start",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: "33.02px",
                  lineHeight: "40.25px",
                  color: "#000000",
                  textTransform: "capitalize",
                }}
              >
                Filters
              </Typography>

              {/* Applied filters */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  flexWrap: "wrap",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {AppliedFilters?.map((item, index) => {
                  return item.isActive ? (
                    <Button
                      key={index}
                      variant="contained"
                      sx={{
                        width: "125.14px",
                        height: "39.97px",
                        boxShadow: "none",
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "21.94px",
                        color: "white",
                        border: "0.869px solid #FB8E00",
                        borderRadius: "55.1058px",
                        textTransform: "capitalize",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        P: 0,
                        mr: 1,
                        mt: 1,
                        background:
                          "linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9",
                        "&:hover": { boxShadow: "none" },
                      }}
                    >
                      {item.Name}
                      <CloseIcon
                        sx={{ color: "white", ml: 0.5, fontSize: "20px" }}
                      />
                    </Button>
                  ) : (
                    <Button
                      key={index}
                      variant="outlined"
                      sx={{
                        width: "125.14px",
                        height: "39.97px",
                        boxShadow: "none",
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "21.94px",
                        color: "#000000",
                        border: "0.869px solid #FB8E00",
                        borderRadius: "55.1058px",
                        textTransform: "capitalize",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        P: 0,
                        mr: 1,
                        mt: 1,
                        "&:hover": {
                          boxShadow: "none",
                          border: "0.869px solid #FB8E00",
                        },
                      }}
                    >
                      {item.Name}
                    </Button>
                  );
                })}
              </Box>

              {/* ----------------------- */}

              {/* Categories */}
              <Box
                sx={{
                  width: "100%",
                  mt: 3,
                  "& .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root": {
                    px: 0,
                  },
                  "& .css-15v22id-MuiAccordionDetails-root": { px: 0 },
                }}
              >
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  sx={{ background: "transparent", boxShadow: "none", mx: 0 }}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel1" ? (
                        <RemoveIcon sx={{ color: "#FB8E00" }} />
                      ) : (
                        <AddIcon sx={{ color: "#FB8E00" }} />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "24.38px",
                        color: "#FB8E00",
                        textTransform: "#FB8E00",
                      }}
                    >
                      Categories
                    </Typography>
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
                      {/* Search bar */}
                      <Box
                        sx={{
                          width: "100%",
                          height: "50.63px",
                          borderRadius: "58px",
                          border: "1px solid rgba(0,0,0,0.6)",
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
                      {/*  */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          mt: 2,
                        }}
                      >
                        {Category_Filters?.map((item, index) => {
                          return (
                            <FormControlLabel
                              key={index}
                              control={
                                <Checkbox
                                  checked={item.Current_State}
                                  onChange={(e) =>
                                    item.Change_f(e.target.checked)
                                  }
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
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>

              {/* Sort by date */}
              <Box
                sx={{
                  width: "100%",
                  mt: 1,
                  "& .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root": {
                    px: 0,
                  },
                  "& .css-15v22id-MuiAccordionDetails-root": { px: 0 },
                }}
              >
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  sx={{ background: "transparent", boxShadow: "none", mx: 0 }}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel2" ? (
                        <RemoveIcon sx={{ color: "#FB8E00" }} />
                      ) : (
                        <AddIcon sx={{ color: "#FB8E00" }} />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "24.38px",
                        color: "#FB8E00",
                        textTransform: "#FB8E00",
                      }}
                    >
                      Sort by date
                    </Typography>
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
                      {/* Search bar */}
                      <Box
                        sx={{
                          width: "100%",
                          height: "50.63px",
                          borderRadius: "58px",
                          border: "1px solid rgba(0,0,0,0.6)",
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
                      {/*  */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          mt: 3,
                        }}
                      >
                        {Category_Filters?.map((item, index) => {
                          return (
                            <FormControlLabel
                              key={index}
                              control={
                                <Checkbox
                                  checked={item.Current_State}
                                  onChange={(e) =>
                                    item.Change_f(e.target.checked)
                                  }
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
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>

              {/* Popular */}
              <Box
                sx={{
                  width: "100%",
                  mt: 1,
                  "& .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root": {
                    px: 0,
                  },
                  "& .css-15v22id-MuiAccordionDetails-root": { px: 0 },
                }}
              >
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  sx={{ background: "transparent", boxShadow: "none", mx: 0 }}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel3" ? (
                        <RemoveIcon sx={{ color: "#FB8E00" }} />
                      ) : (
                        <AddIcon sx={{ color: "#FB8E00" }} />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "24.38px",
                        color: "#FB8E00",
                        textTransform: "#FB8E00",
                      }}
                    >
                      Popular
                    </Typography>
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
                    ></Box>
                  </AccordionDetails>
                </Accordion>
              </Box>

              {/* Prices */}
              <Box
                sx={{
                  width: "100%",
                  mt: 1,
                  "& .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root": {
                    px: 0,
                  },
                  "& .css-15v22id-MuiAccordionDetails-root": { px: 0 },
                }}
              >
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  sx={{ background: "transparent", boxShadow: "none", mx: 0 }}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel4" ? (
                        <RemoveIcon sx={{ color: "#FB8E00" }} />
                      ) : (
                        <AddIcon sx={{ color: "#FB8E00" }} />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "24.38px",
                        color: "#FB8E00",
                        textTransform: "#FB8E00",
                      }}
                    >
                      Prices
                    </Typography>
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
                    ></Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>

            {/* Right */}
            <Grid
              item
              xs={12}
              lg={9}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: { md: "space-between", xs: "center" },
                  alignItems: "center",
                  flexDirection: { md: "row", xs: "column" },
                }}
              >
                {/* Inputs */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: { md: "unset", xs: "100%" },
                  }}
                >
                  {/* Search bar */}
                  <Box
                    sx={{
                      width: { md: "300px", xs: "50%" },
                      height: "57px",
                      borderRadius: "58px",
                      border: "1px solid rgba(0,0,0,0.6)",
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

                  {/* Dropdown */}
                  <Box
                    sx={{
                      width: { md: "300px", xs: "50%" },
                      height: "57px",
                      ml: 1.5,
                      "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(0,0,0,0.6)",
                      },
                    }}
                  >
                    <FormControl fullWidth>
                      <InputLabel
                        sx={{
                          color: "rgba(0,0,0,0.7)",
                          fontFamily: "Montserrat",
                          fontWeight: 300,
                          fontSize: "18px",
                          lineHeight: "21.94px",
                          background: { md: "white", xs: "transparent" },
                          width: { md: "auto", xs: "150px" },
                          maxWidth: "auto",
                        }}
                        id="demo-simple-select-label"
                      >
                        Price low to high
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Price}
                        label="Price low to high"
                        onChange={handlePriceChange}
                        sx={{ borderRadius: "58px", background: "white" }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>

                {/* Views button */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: { md: 0, xs: 2 },
                  }}
                >
                  <IconButton
                    onClick={() => {
                      SetGridView(false);
                      SetAppView(true);
                    }}
                    aria-label="delete"
                  >
                    <Image
                      src={
                        AppView
                          ? "/assets/pictures/appActive.svg"
                          : "/assets/pictures/app.svg"
                      }
                      alt={"Logo"}
                      width={22.04}
                      height={22.04}
                      objectFit="contain"
                    />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      SetGridView(true);
                      SetAppView(false);
                    }}
                    sx={{ ml: 1 }}
                    aria-label="delete"
                  >
                    <Image
                      src={
                        GridView
                          ? "/assets/pictures/gridActive.svg"
                          : "/assets/pictures/grid.svg"
                      }
                      alt={"Logo"}
                      width={22.04}
                      height={22.04}
                      objectFit="contain"
                    />
                  </IconButton>
                  {/* Template button */}
                  <Button
                    variant="contained"
                    sx={{
                      width: "191px",
                      height: "57px",
                      background:
                        "linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9",
                      borderRadius: "108px",
                      boxShadow: "none",
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: "18.37px",
                      lineHeight: "156.5%",
                      color: "#FFFFFF",
                      p: 0,
                      textTransform: "unset",
                      "&:hover": {},
                      ml: 2,
                    }}
                  >
                    My Template
                  </Button>
                </Box>
              </Box>

              {/*NFT's Card section */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  mt: 4,
                }}
              >
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
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "19.5px",
                      color: "#823AFF",
                      textTransform: "capitalize",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "start",
                    }}
                  >
                    <Image
                      src={"/assets/pictures/restore.svg"}
                      alt={"Logo"}
                      width={16.02}
                      height={16.02}
                      objectFit="contain"
                    />
                    <Box component={"span"} sx={{ ml: 1 }}>
                      Updated 54s ago
                    </Box>
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "19.5px",
                      color: "#823AFF",
                      textTransform: "capitalize",
                    }}
                  >
                    9,630 items
                  </Typography>
                </Box>

                {/* Cards */}
                <Box sx={{ flexGrow: 1, width: "100%", mt: 3 }}>
                  <Grid
                    container
                    columnSpacing={{ sm: 2 }}
                    rowSpacing={{ md: 2, xs: 5 }}
                  >
                    {NFTs?.map((item, index) => {
                      return (
                        <Grid key={index} item xs={12} sm={6} md={3}>
                          <NFT_Card Data={item} />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* splashes */}
        <Box
          sx={{
            width: "586.64px",
            height: "634.15px",
            position: "absolute",
            left: 0,
            top: "50%",
            display: { md: "block", xs: "none" },
          }}
        >
          <Image
            src={"/assets/pictures/3.svg"}
            alt={"Logo"}
            layout="fill"
            objectFit="cotain"
          />
        </Box>
        <Box
          sx={{
            width: "818.86px",
            height: "885.18px",
            position: "absolute",
            right: "-100px",
            top: "30%",
            display: { md: "block", xs: "none" },
          }}
        >
          <Image
            src={"/assets/pictures/4.svg"}
            alt={"Logo"}
            layout="fill"
            objectFit="cotain"
          />
        </Box>
      </Box>
    </>
  );
}

export default Marketplace;

const NFTs = [
  {
    imgURL: "/assets/pictures/dognft.svg",
    Name: "Lacus Vestibulum",
    Types: {
      type1: "#NFT",
      type2: "#NFT",
      type3: "#NFT",
    },
    price: "0.068ETH",
  },
  {
    imgURL: "/assets/pictures/dognft.svg",
    Name: "Lacus Vestibulum",
    Types: {
      type1: "#NFT",
      type2: "#NFT",
      type3: "#NFT",
    },
    price: "0.068ETH",
  },
  {
    imgURL: "/assets/pictures/catnft.svg",
    Name: "Lacus Vestibulum",
    Types: {
      type1: "#NFT",
      type2: "#NFT",
      type3: "#NFT",
    },
    price: "0.068ETH",
  },
  {
    imgURL: "/assets/pictures/dognft.svg",
    Name: "Lacus Vestibulum",
    Types: {
      type1: "#NFT",
      type2: "#NFT",
      type3: "#NFT",
    },
    price: "0.068ETH",
  },
  {
    imgURL: "/assets/pictures/dognft.svg",
    Name: "Lacus Vestibulum",
    Types: {
      type1: "#NFT",
      type2: "#NFT",
      type3: "#NFT",
    },
    price: "0.068ETH",
  },
  {
    imgURL: "/assets/pictures/dognft.svg",
    Name: "Lacus Vestibulum",
    Types: {
      type1: "#NFT",
      type2: "#NFT",
      type3: "#NFT",
    },
    price: "0.068ETH",
  },
  {
    imgURL: "/assets/pictures/catnft.svg",
    Name: "Lacus Vestibulum",
    Types: {
      type1: "#NFT",
      type2: "#NFT",
      type3: "#NFT",
    },
    price: "0.068ETH",
  },
  {
    imgURL: "/assets/pictures/dognft.svg",
    Name: "Lacus Vestibulum",
    Types: {
      type1: "#NFT",
      type2: "#NFT",
      type3: "#NFT",
    },
    price: "0.068ETH",
  },
  {
    imgURL: "/assets/pictures/dognft.svg",
    Name: "Lacus Vestibulum",
    Types: {
      type1: "#NFT",
      type2: "#NFT",
      type3: "#NFT",
    },
    price: "0.068ETH",
  },
  {
    imgURL: "/assets/pictures/dognft.svg",
    Name: "Lacus Vestibulum",
    Types: {
      type1: "#NFT",
      type2: "#NFT",
      type3: "#NFT",
    },
    price: "0.068ETH",
  },
  {
    imgURL: "/assets/pictures/catnft.svg",
    Name: "Lacus Vestibulum",
    Types: {
      type1: "#NFT",
      type2: "#NFT",
      type3: "#NFT",
    },
    price: "0.068ETH",
  },
  {
    imgURL: "/assets/pictures/dognft.svg",
    Name: "Lacus Vestibulum",
    Types: {
      type1: "#NFT",
      type2: "#NFT",
      type3: "#NFT",
    },
    price: "0.068ETH",
  },
];
