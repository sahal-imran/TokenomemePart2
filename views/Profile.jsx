import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";

// components
import ProfileCard from "../components/Common/ProfileCard";
import OverviewUserCard from "../components/Profile/OverviewUserCard";
import AchievementCard from "../components/Profile/AchievementCard";

function Profile() {
  const [SwtichPanel, setSwtichPanel] = React.useState(0);

  const handleSwtichPanelChange = (event, newSwtichPanel) => {
    setSwtichPanel(newSwtichPanel);
    if (newSwtichPanel === 0) {
      Set_Overview(false);
      Set_Achievement(false);
      Set_My_collectibles(true);
      Set_Saved(false);
      Set_Feeds(false);
    }
    if (newSwtichPanel === 1) {
      Set_Overview(true);
      Set_Achievement(false);
      Set_My_collectibles(false);
      Set_Saved(false);
      Set_Feeds(false);
    }
  };

  // Post Button
  const [My_collectibles, Set_My_collectibles] = useState(true);
  const [Saved, Set_Saved] = useState(false);
  const [Feeds, Set_Feeds] = useState(false);
  const collectibles_Click = () => {
    Set_My_collectibles(true);
    Set_Saved(false);
    Set_Feeds(false);
  };
  const Saved_Click = () => {
    Set_My_collectibles(false);
    Set_Saved(true);
    Set_Feeds(false);
  };
  const Feeds_Click = () => {
    Set_My_collectibles(false);
    Set_Saved(false);
    Set_Feeds(true);
  };

  const PostBtns = [
    {
      Name: "My collectibles",
      State: My_collectibles,
      f: collectibles_Click,
    },
    {
      Name: "Saved",
      State: Saved,
      f: Saved_Click,
    },
    {
      Name: "Feeds",
      State: Feeds,
      f: Feeds_Click,
    },
  ];

  // Post Button
  const [Overview, Set_Overview] = useState(true);
  const [Achievement, Set_Achievement] = useState(false);

  const Overview_Click = () => {
    Set_Overview(true);
    Set_Achievement(false);
  };
  const Achievement_Click = () => {
    Set_Overview(false);
    Set_Achievement(true);
  };

  const RewardtBtns = [
    {
      Name: "Overview",
      State: Overview,
      f: Overview_Click,
    },
    {
      Name: "Achievement",
      State: Achievement,
      f: Achievement_Click,
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          background: "#f3f3f3",
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
        <ProfileCard />

        {/* Profile Data */}
        <Box
          sx={{
            width: "100%",
            px: { md: 3, xs: 2 },
            my: 4,
          }}
        >
          <Box
            sx={{
              width: "100%",
              p: { md: 2, xs: 1 },
              background: "white",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "2.72861px",
              minHeight: "100vh",
            }}
          >
            {/* Button bar */}
            <Tabs
              sx={{
                "& .Mui-selected": {
                  fontWeight: 700,
                },
                "& .css-1aquho2-MuiTabs-indicator ": {
                  backgroundColor: "#FB8E00",
                  height: "4px",
                },
                width: "100%",
                borderBottom: "2px solid rgba(0, 0, 0, 0.1)",
                position: "relative",
                zIndex: 10,
              }}
              value={SwtichPanel}
              onChange={handleSwtichPanelChange}
            >
              <Tab
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "26px",
                  color: "rgba(0, 0, 0, 0.6)",
                  px: 6,
                  textTransform: "capitalize",
                }}
                label="Post"
                className={SwtichPanel === 0 ? "GradText2" : ""}
              />
              <Tab
                sx={{
                  fontFamily: "Lato",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "26px",
                  color: "rgba(0, 0, 0, 0.6)",
                  px: 6,
                  textTransform: "capitalize",
                }}
                label="Rewards"
                className={SwtichPanel === 1 ? "GradText2" : ""}
              />
            </Tabs>

            {/* Switchable tabs */}

            {/* Post */}
            {SwtichPanel === 0 && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                  mt: 4,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "100%",
                    overflow: "auto",
                    pl: { sm: 0, xs: 28 },
                  }}
                >
                  {/* Button */}
                  {PostBtns?.map((item, index) => {
                    return (
                      <Box
                        key={index}
                        sx={
                          item.State
                            ? {
                                minWidth: "156px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "5px",
                                mr: 2,
                                position: "relative",
                                zIndex: 10,
                              }
                            : {
                                minWidth: "156px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                p: 0.2,
                                borderRadius: "5px",
                                background:
                                  "linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)",
                                mr: 2,
                                position: "relative",
                                zIndex: 10,
                              }
                        }
                      >
                        <Button
                          onClick={item.f}
                          variant="contained"
                          sx={
                            item.State
                              ? {
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "5px",
                                  boxShadow: "none",
                                  background:
                                    "linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)",
                                  fontFamily: "Montserrat",
                                  fontWeight: 600,
                                  fontSize: "16px",
                                  lineHeight: "19.5px",
                                  color: "white",
                                  textTransform: "unset",
                                  p: 0,
                                  "&:hover": {},
                                }
                              : {
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "5px",
                                  boxShadow: "none",
                                  background: "white",
                                  fontFamily: "Montserrat",
                                  fontWeight: 600,
                                  fontSize: "16px",
                                  lineHeight: "19.5px",
                                  color: "rgba(0,0,0,0.7)",
                                  textTransform: "unset",
                                  p: 0,
                                  "&:hover": {
                                    boxShadow: "none",
                                    background: "white",
                                  },
                                }
                          }
                        >
                          {item.Name}
                        </Button>
                      </Box>
                    );
                  })}
                </Box>
                {/* My collectibles */}
                {My_collectibles && (
                  <Box
                    sx={{
                      flexGrow: 1,
                      width: "100%",
                      mt: 4,
                      position: "relative",
                      zIndex: 10,
                    }}
                  >
                    <Grid
                      container
                      columnSpacing={{ md: 2 }}
                      rowSpacing={{ md: 4, xs: 4 }}
                    >
                      {collectibles_Data?.map((item, index) => {
                        return (
                          <Grid key={index} item xs={12} md={3}>
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                p: 0.2,
                                background:
                                  "linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)",
                                borderRadius: "8px",
                                transition: "all 0.4s ease",
                                "&:hover": {
                                  filter:
                                    "drop-shadow(0px 14.1852px 28px rgba(0, 0, 0, 0.07))",
                                  background: "none",
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  flexDirection: "column",
                                  background: "white",
                                  borderRadius: "6px",
                                  p: 1,
                                  position: "relative",
                                }}
                              >
                                <Box
                                  sx={{
                                    width: "100%",
                                    height: "333px",
                                    borderRadius: "8px",
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "8px",
                                  }}
                                >
                                  <Image
                                    src={item.imgURL}
                                    alt={"collectibles"}
                                    layout="fill"
                                    objectFit="cover"
                                  />
                                </Box>
                                <Typography
                                  sx={{
                                    fontFamily: "Lato",
                                    fontWeight: 600,
                                    fontSize: "24px",
                                    lineHeight: "31.68px",
                                    color: "rgba(0, 0, 0, 0.5)",
                                    textAlign: "center",
                                    my: 2,
                                  }}
                                >
                                  {item.des}
                                </Typography>
                                <IconButton
                                  sx={{
                                    position: "absolute",
                                    right: "20px",
                                    top: "20px",
                                    background: "white",
                                    "&:hover": {
                                      background: "white",
                                    },
                                  }}
                                  aria-label="delete"
                                >
                                  <Image
                                    src={"/assets/pictures/mark.svg"}
                                    alt={"edit"}
                                    width={24}
                                    height={24}
                                    objectFit="contain"
                                  />
                                </IconButton>
                              </Box>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                )}
                {/* Saved */}
                {Saved && (
                  <Box
                    sx={{
                      flexGrow: 1,
                      width: "100%",
                      mt: 4,
                      position: "relative",
                      zIndex: 10,
                    }}
                  >
                    <Grid
                      container
                      columnSpacing={{ md: 2 }}
                      rowSpacing={{ md: 4, xs: 4 }}
                    >
                      {Saved_Data?.map((item, index) => {
                        return (
                          <Grid key={index} item xs={12} md={3}>
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                p: 0.2,
                                background:
                                  "linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)",
                                borderRadius: "8px",
                                transition: "all 0.4s ease",
                                "&:hover": {
                                  filter:
                                    "drop-shadow(0px 14.1852px 28px rgba(0, 0, 0, 0.07))",
                                  background: "none",
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  flexDirection: "column",
                                  background: "white",
                                  borderRadius: "6px",
                                  p: 1,
                                  position: "relative",
                                }}
                              >
                                <Box
                                  sx={{
                                    width: "100%",
                                    height: "333px",
                                    borderRadius: "8px",
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "8px",
                                  }}
                                >
                                  <Image
                                    src={item.imgURL}
                                    alt={"collectibles"}
                                    layout="fill"
                                    objectFit="cover"
                                  />
                                </Box>
                                <Typography
                                  sx={{
                                    fontFamily: "Lato",
                                    fontWeight: 600,
                                    fontSize: "24px",
                                    lineHeight: "31.68px",
                                    color: "rgba(0, 0, 0, 0.5)",
                                    textAlign: "center",
                                    my: 2,
                                  }}
                                >
                                  {item.des}
                                </Typography>
                                <IconButton
                                  sx={{
                                    position: "absolute",
                                    right: "20px",
                                    top: "20px",
                                    background: "white",
                                    "&:hover": {
                                      background: "white",
                                    },
                                  }}
                                  aria-label="delete"
                                >
                                  <Image
                                    src={"/assets/pictures/mark.svg"}
                                    alt={"edit"}
                                    width={24}
                                    height={24}
                                    objectFit="contain"
                                  />
                                </IconButton>
                              </Box>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                )}
                {/* Feedds */}
                {Feeds && (
                  <Box
                    sx={{
                      flexGrow: 1,
                      width: "100%",
                      mt: 4,
                      position: "relative",
                      zIndex: 10,
                    }}
                  >
                    <Grid
                      container
                      columnSpacing={{ md: 2 }}
                      rowSpacing={{ md: 4, xs: 4 }}
                    >
                      {Feeds_Data?.map((item, index) => {
                        return (
                          <Grid key={index} item xs={12} md={3}>
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                p: 0.2,
                                background:
                                  "linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)",
                                borderRadius: "8px",
                                transition: "all 0.4s ease",
                                "&:hover": {
                                  boxShadow:
                                    "0px 14.1852px 17.0223px rgba(0, 0, 0, 0.13)",
                                  background: "none",
                                },
                                "&:hover button": {
                                  background:
                                    "linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9",
                                  color: "white",
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "start",
                                  flexDirection: "column",
                                  background: "white",
                                  borderRadius: "6px",
                                  p: 1,
                                  position: "relative",
                                }}
                              >
                                <Box
                                  sx={{
                                    width: "100%",
                                    height: "218px",
                                    borderRadius: "8px",
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "8px",
                                  }}
                                >
                                  <Image
                                    src={item.imgURL}
                                    alt={"collectibles"}
                                    layout="fill"
                                    objectFit="cover"
                                  />
                                </Box>
                                <Typography
                                  sx={{
                                    fontFamily: "Lato",
                                    fontWeight: 700,
                                    fontSize: "16px",
                                    lineHeight: "24.64px",
                                    color: "#000000",
                                    textAlign: "start",
                                    mt: 2,
                                  }}
                                >
                                  Popularity:{" "}
                                  <Box
                                    component={"span"}
                                    sx={{
                                      ml: 0.5,
                                      fontWeight: 400,
                                      color: "rgba(0, 0, 0, 0.5)",
                                    }}
                                  >
                                    Trending
                                  </Box>
                                </Typography>
                                <Typography
                                  sx={{
                                    fontFamily: "Lato",
                                    fontWeight: 700,
                                    fontSize: "16px",
                                    lineHeight: "24.64px",
                                    color: "#000000",
                                    textAlign: "start",
                                    mt: 0.5,
                                  }}
                                >
                                  Subreddit:{" "}
                                  <Box
                                    component={"span"}
                                    sx={{
                                      ml: 0.5,
                                      fontWeight: 400,
                                      color: "rgba(0, 0, 0, 0.5)",
                                    }}
                                  >
                                    Lorem
                                  </Box>
                                </Typography>
                                <Button
                                  variant="contained"
                                  sx={{
                                    width: "156px",
                                    height: "40px",
                                    background: "white",
                                    borderRadius: "60px",
                                    boxShadow: "none",
                                    alignSelf: "end",
                                    mt: 2,
                                    fontFamily: "Montserrat",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "20px",
                                    color: "#413C58",
                                    border: "1px solid #FB8E00",
                                    p: 0,
                                    textTransform: "unset",
                                    "&:hover": {
                                      boxShadow: "none",
                                      background: "white",
                                    },
                                  }}
                                >
                                  Disallow NSFw
                                </Button>

                                {/* LAbel */}
                                <Typography
                                  sx={{
                                    fontFamily: "Montserrat",
                                    fontWeight: 700,
                                    fontSize: "12px",
                                    lineHeight: "14.63px",
                                    color: "white",
                                    textAlign: "center",
                                    px: 2,
                                    py: 0.5,
                                    backgroundColor: "#FB8E00",
                                    borderRadius: "5px",
                                    position: "absolute",
                                    left: "20px",
                                    top: "20px",
                                  }}
                                >
                                  Reddit
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                )}
              </Box>
            )}

            {/* Rewards */}
            {SwtichPanel === 1 && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                  mt: 4,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "100%",
                    overflow: "auto",
                    pl: { sm: 0, xs: 4 },
                  }}
                >
                  {/* Button */}
                  {RewardtBtns?.map((item, index) => {
                    return (
                      <Box
                        key={index}
                        sx={
                          item.State
                            ? {
                                minWidth: "156px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "5px",
                                mr: 2,
                                position: "relative",
                                zIndex: 10,
                              }
                            : {
                                minWidth: "156px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                p: 0.2,
                                borderRadius: "5px",
                                background:
                                  "linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)",
                                mr: 2,
                                position: "relative",
                                zIndex: 10,
                              }
                        }
                      >
                        <Button
                          onClick={item.f}
                          variant="contained"
                          sx={
                            item.State
                              ? {
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "5px",
                                  boxShadow: "none",
                                  background:
                                    "linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)",
                                  fontFamily: "Montserrat",
                                  fontWeight: 600,
                                  fontSize: "16px",
                                  lineHeight: "19.5px",
                                  color: "white",
                                  textTransform: "unset",
                                  p: 0,
                                  "&:hover": {},
                                }
                              : {
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "5px",
                                  boxShadow: "none",
                                  background: "white",
                                  fontFamily: "Montserrat",
                                  fontWeight: 600,
                                  fontSize: "16px",
                                  lineHeight: "19.5px",
                                  color: "rgba(0,0,0,0.7)",
                                  textTransform: "unset",
                                  p: 0,
                                  "&:hover": {
                                    boxShadow: "none",
                                    background: "white",
                                  },
                                }
                          }
                        >
                          {item.Name}
                        </Button>
                      </Box>
                    );
                  })}
                </Box>

                {Overview && (
                  <Box
                    sx={{
                      flexGrow: 1,
                      width: { md: "70%", xs: "100%" },
                      mx: "auto",
                      mt: 10,
                    }}
                  >
                    <Grid
                      container
                      columnSpacing={{ md: 6 }}
                      rowSpacing={{ md: 2, xs: 6 }}
                    >
                      <Grid item xs={12} md={6}>
                        <OverviewUserCard
                          ico={"/assets/pictures/user.svg"}
                          Name={"Chet Manly"}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <OverviewUserCard
                          ico={"/assets/pictures/user2.svg"}
                          Name={"Top Achievement"}
                          Text={`Tortor dolor euismod amet, sagittis eget id dolor posuere. In est arcu
          turpis tristique tortor mi cursus. Blandit sit eu in rhoncus libero
          ornare quis nibh. Pulvinar imperdiet tellus quam integer vulputate
          faucibus nisl, odio. Vel ut sed orci turpis vulputate molestie.`}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                )}
                {Achievement && (
                  <Box
                    sx={{
                      width: "100%",
                      minHeight: "500px",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      flexDirection: "column",
                      mt: 10,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontWeight: 500,
                        fontSize: "20px",
                        lineHeight: "30.8px",
                        color: "#FB8E00",
                        textAlign: "center",
                        textTransform: "uppercase",
                        alignSelf: "end",
                      }}
                    >
                      Total Points: 0
                    </Typography>
                    {Achievement_data?.map((item, index) => {
                      return (
                        <AchievementCard
                          key={index}
                          ico={item.Ico}
                          Title={item.Title}
                          Label={item.Label}
                          Name={item.Name}
                          progress={item.Progress}
                          points={item.Points}
                        />
                      );
                    })}
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </Box>

        {My_collectibles && (
          <Box
            sx={{
              width: "800px",
              height: "800px",
              position: "absolute",
              right: 0,
              top: "40%",
              display: { md: "block", xs: "none" },
            }}
          >
            <Image
              src={"/assets/pictures/5.svg"}
              alt={"Logo"}
              layout="fill"
              objectFit="cotain"
            />
          </Box>
        )}
        {Saved && (
          <Box
            sx={{
              width: "609.68px",
              height: "695.25px",
              position: "absolute",
              left: "-100px",
              top: "35%",
              display: { md: "block", xs: "none" },
            }}
          >
            <Image
              src={"/assets/pictures/6.svg"}
              alt={"Logo"}
              layout="fill"
              objectFit="cotain"
            />
          </Box>
        )}
        {Saved && (
          <Box
            sx={{
              width: "661.63px",
              height: "570.46px",
              position: "absolute",
              right: "0px",
              top: "50%",
              display: { md: "block", xs: "none" },
            }}
          >
            <Image
              src={"/assets/pictures/7.svg"}
              alt={"Logo"}
              layout="fill"
              objectFit="cotain"
            />
          </Box>
        )}
        {Feeds && (
          <Box
            sx={{
              width: "645.71px",
              height: "606.73px",
              position: "absolute",
              left: "-100px",
              top: "35%",
              display: { md: "block", xs: "none" },
            }}
          >
            <Image
              src={"/assets/pictures/8.svg"}
              alt={"Logo"}
              layout="fill"
              objectFit="cotain"
            />
          </Box>
        )}
      </Box>
    </>
  );
}

export default Profile;

const collectibles_Data = [
  {
    imgURL: "/assets/pictures/collectibles1.svg",
    des: "Imperdiet sed maecenas arcu fusce odio",
  },
  {
    imgURL: "/assets/pictures/collectibles2.svg",
    des: "Imperdiet sed maecenas arcu fusce odio",
  },
  {
    imgURL: "/assets/pictures/collectibles3.svg",
    des: "Imperdiet sed maecenas arcu fusce odio",
  },
  {
    imgURL: "/assets/pictures/collectibles4.svg",
    des: "Imperdiet sed maecenas arcu fusce odio",
  },
  {
    imgURL: "/assets/pictures/collectibles5.svg",
    des: "Imperdiet sed maecenas arcu fusce odio",
  },
];

const Saved_Data = [
  {
    imgURL: "/assets/pictures/collectibles1.svg",
    des: "Imperdiet sed maecenas arcu fusce odio",
  },
  {
    imgURL: "/assets/pictures/collectibles4.svg",
    des: "Imperdiet sed maecenas arcu fusce odio",
  },
  {
    imgURL: "/assets/pictures/collectibles2.svg",
    des: "Imperdiet sed maecenas arcu fusce odio",
  },
  {
    imgURL: "/assets/pictures/collectibles3.svg",
    des: "Imperdiet sed maecenas arcu fusce odio",
  },
  {
    imgURL: "/assets/pictures/collectibles5.svg",
    des: "Imperdiet sed maecenas arcu fusce odio",
  },
];

const Feeds_Data = [
  {
    imgURL: "/assets/pictures/feeds.svg",
    des: "Imperdiet sed maecenas arcu fusce odio",
  },
  {
    imgURL: "/assets/pictures/feeds.svg",
    des: "Imperdiet sed maecenas arcu fusce odio",
  },
  {
    imgURL: "/assets/pictures/feeds.svg",
    des: "Imperdiet sed maecenas arcu fusce odio",
  },
  {
    imgURL: "/assets/pictures/feeds.svg",
    des: "Imperdiet sed maecenas arcu fusce odio",
  },
  {
    imgURL: "/assets/pictures/feeds.svg",
    des: "Imperdiet sed maecenas arcu fusce odio",
  },
];

const Achievement_data = [
  {
    Ico: "/assets/pictures/reward1.svg",
    Title: "50-MILE-HIGH CLUB",
    Label: "Common",
    Name: "Successfully WooHoo ina Rocketship.",
    Progress: "65%",
    Points: 10,
  },
  {
    Ico: "/assets/pictures/reward2.svg",
    Title: "50-MILE-HIGH CLUB",
    Label: "Rare",
    Name: "Successfully WooHoo ina Rocketship.",
    Progress: "65%",
    Points: 25,
  },
  {
    Ico: "/assets/pictures/reward3.svg",
    Title: "50-MILE-HIGH CLUB",
    Label: "Common",
    Name: "Successfully WooHoo ina Rocketship.",
    Progress: "65%",
    Points: 75,
  },
  {
    Ico: "/assets/pictures/reward4.svg",
    Title: "50-MILE-HIGH CLUB",
    Label: "very Rare",
    Name: "Successfully WooHoo ina Rocketship.",
    Progress: "65%",
    Points: 100,
  },
];
