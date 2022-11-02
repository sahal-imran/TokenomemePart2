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
import Drawer from "react-modern-drawer";
//import styles 👇
import "react-modern-drawer/dist/index.css";

// Components
import SideFilterBar from "../components/Home/SideFilterBar";
import SideNotiBar from "../components/Home/SideNotiBar";
import PostCard from "../components/Home/PostCard";

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

  const [isFiltersOpen, setFilters] = useState(false);
  const [isNofificationsOpen, setNofifications] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1, position: "relative" }}>
        <Grid container spacing={0}>
          {/* Filter/Left */}
          <Grid
            item
            md={2.5}
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "start",
              alignItems: "center",
              flexDirection: "column",
              background: "#f3f3f3",
              width: "100%",
              position: "relative",
            }}
          >
            <SideFilterBar
              Filters={Filters}
              Communities={Communities}
              ref={Search_Ref}
            />
          </Grid>

          {/* Main Content */}
          <Grid
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              flexDirection: "column",
              p: { md: 5, xs: 2 },
              background: "white",
              width: "100%",
              position: "relative",
              background: "#f3f3f3",
            }}
            item
            md={7}
            xs={12}
          >
            <Box
              sx={{
                display: { md: "none", xs: "flex" },
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button
                onClick={() => setFilters(true)}
                variant="contained"
                sx={{
                  width: "140px",
                  height: "38px",
                  background:
                    "linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9",
                  borderRadius: "60px",
                  boxShadow: "none",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "154%",
                  color: "#FFFFFF",
                  p: 0,
                  textTransform: "unset",
                  "&:hover": {},
                }}
              >
                Filters
              </Button>
              <Button
                onClick={() => setNofifications(true)}
                variant="contained"
                sx={{
                  width: "140px",
                  height: "38px",
                  background:
                    "linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9",
                  borderRadius: "60px",
                  boxShadow: "none",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "154%",
                  color: "#FFFFFF",
                  p: 0,
                  textTransform: "unset",
                  "&:hover": {},
                  ml: 2,
                }}
              >
                Notifications
              </Button>
            </Box>
            {/* Trending Categories */}
            <Box
              sx={{
                width: "100%",
                height: "320px",
                borderRadius: "4px",
                background: "white",
                boxShadow: "0px 25px 30px rgba(0, 0, 0, 0.05)",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
                p: 2,
                mt: { md: 0, xs: 2 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "24.38px",
                  color: "#823AFF",
                  textTransform: "unset",
                  textDecoration: "none",
                }}
              >
                Trending Categories
              </Typography>
              <Box sx={{ width: "100%", mt: 3 }}>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={12}
                  breakpoints={{
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 12,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 12,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 12,
                    },
                  }}
                >
                  {Categories?.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: "216px",
                            borderRadius: "8px",
                            overflow: "hidden",
                            "&:hover": {
                              filter:
                                "drop-shadow(0px 2px 17px rgba(251, 167, 20, 0.42))",
                            },
                          }}
                        >
                          <Image
                            src={item.imgURL}
                            alt={item.Name}
                            layout="fill"
                            objectFit="cover"
                          />
                          <Link href={item.URL}>
                            <Anchorlink
                              sx={{
                                position: "absolute",
                                width: "100%",
                                height: "45px",
                                borderRadius: "0px",
                                bottom: 0,
                                left: 0,
                                fontFamily: "Montserrat",
                                fontWeight: 600,
                                fontSize: "16px",
                                lineHeight: "19.5px",
                                color: "white",
                                textTransform: "unset",
                                background: "unset",
                                textDecoration: "none",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                "&:hover": {
                                  background:
                                    "linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9",
                                },
                              }}
                            >
                              {item.Name}
                            </Anchorlink>
                          </Link>
                        </Box>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Box>
            </Box>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </Grid>

          {/* Suggestions */}
          <Grid
            item
            md={2.5}
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "start",
              alignItems: "center",
              flexDirection: "column",
              background: "#f3f3f3",
              width: "100%",
              position: "relative",
            }}
          >
            <SideNotiBar />
          </Grid>
        </Grid>
        <Box
          sx={{
            width: "833.02px",
            height: "569.28px",
            position: "absolute",
            left: "-200px",
            top: "15%",
          }}
        >
          <Image
            src={"/assets/pictures/1.svg"}
            alt={"Logo"}
            layout="fill"
            objectFit="cotain"
          />
        </Box>
        <Box
          sx={{
            width: "893.72px",
            height: "894.85px",
            position: "absolute",
            right: 0,
            top: "50%",
          }}
        >
          <Image
            src={"/assets/pictures/2.svg"}
            alt={"Logo"}
            layout="fill"
            objectFit="cotain"
          />
        </Box>
      </Box>

      {/* ++++++++++++++++++ */}
      {/* Drawers for mobile */}
      {/* ++++++++++++++++++ */}

      {/* Filetrs */}
      <Drawer
        open={isFiltersOpen}
        onClose={() => setFilters(false)}
        direction="left"
        className="Drawer"
        style={{
          width: "100%",
          background: "white",
          padding: "12px 10px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            alignSelf: "end",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Hamburger
            rounded
            size={28}
            toggled={isFiltersOpen}
            toggle={setFilters}
          />
        </Box>
        <SideFilterBar
          Filters={Filters}
          Communities={Communities}
          ref={Search_Ref}
        />
      </Drawer>

      {/* Filetrs */}
      <Drawer
        open={isNofificationsOpen}
        onClose={() => setNofifications(false)}
        direction="right"
        className="Drawer"
        style={{
          width: "100%",
          background: "white",
          padding: "12px 10px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            alignSelf: "end",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Hamburger
            rounded
            size={28}
            toggled={isNofificationsOpen}
            toggle={setNofifications}
          />
        </Box>
        <SideNotiBar />
      </Drawer>
    </>
  );
}

export default Home;

const Categories = [
  {
    Name: "Dog",
    imgURL: "/assets/pictures/dog.svg",
    URL: "",
  },
  {
    Name: "Series",
    imgURL: "/assets/pictures/series.svg",
    URL: "",
  },
  {
    Name: "Funny",
    imgURL: "/assets/pictures/funny.svg",
    URL: "",
  },
  {
    Name: "Movies",
    imgURL: "/assets/pictures/movies.svg",
    URL: "",
  },
  {
    Name: "WTF",
    imgURL: "/assets/pictures/wtf.svg",
    URL: "",
  },
  {
    Name: "Dog",
    imgURL: "/assets/pictures/dog.svg",
    URL: "",
  },
  {
    Name: "Series",
    imgURL: "/assets/pictures/series.svg",
    URL: "",
  },
];
