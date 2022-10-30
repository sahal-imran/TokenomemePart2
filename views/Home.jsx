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

// Components
import SearchBar from "../components/Home/SearchBar";

function Home() {
  const Search_Ref = useRef();

  // Filters
  const [Popular, setPopular] = useState(false);
  const [New, setNew] = useState(false);
  const [Original, setOriginal] = useState(false);
  const [Report, setReport] = useState(false);
  const [Collectible, setCollectible] = useState(false);
  const [Feeds, setFeeds] = useState(false);

  const Filters = [
    {
      Name: "Popular",
      Current_State: Popular,
      Change_f: setPopular,
    },
    {
      Name: "New",
      Current_State: New,
      Change_f: setNew,
    },
    {
      Name: "Original",
      Current_State: Original,
      Change_f: setOriginal,
    },
    {
      Name: "Original",
      Current_State: Report,
      Change_f: setReport,
    },
    {
      Name: "Collectible",
      Current_State: Collectible,
      Change_f: setCollectible,
    },
    {
      Name: "Feeds",
      Current_State: Feeds,
      Change_f: setFeeds,
    },
  ];

  // Communities
  const [Animemes, setAnimemes] = useState(false);
  const [Bayc, setBayc] = useState(false);
  const [DankMemes, setDankMemes] = useState(false);
  const [Minecraft_Memes, setMinecraft_Memes] = useState(false);

  const Communities = [
    {
      Name: "Animemes",
      Current_State: Animemes,
      Change_f: setAnimemes,
    },
    {
      Name: "Bayc",
      Current_State: Bayc,
      Change_f: setBayc,
    },
    {
      Name: "DankMemes",
      Current_State: DankMemes,
      Change_f: setDankMemes,
    },
    {
      Name: "Minecraft_Memes",
      Current_State: Minecraft_Memes,
      Change_f: setMinecraft_Memes,
    },
  ];


  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          {/* Filter/Left */}
          <Grid
            item
            md={2.5}
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              flexDirection: "column",
              px: 2,
              background: "white",
              width: "100%",
              height: "100vh",
              position: "relative",
            }}
          >
            {/* Search bar */}
            <SearchBar ref={Search_Ref} />

            {/* Filter */}
            <Box sx={{ width: "100%", mt: 2 }}>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ boxShadow: "none" }}>
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
                    {Filters?.map((item, index) => {
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
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ boxShadow: "none" }}>
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
                    {Communities?.map((item, index) => {
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
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ boxShadow: "none" }}>
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
                    {Communities?.map((item, index) => {
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
          </Grid>

          {/* Main Content */}
          <Grid sx={{ background: "#f3f3f3" }} item md={7.5} xs={12}></Grid>

          {/* Suggestions */}
          <Grid item md={2}></Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;

const Filters = [
  {
    Name: "",
    Current_State: "",
    Change_f: "",
  },
];
