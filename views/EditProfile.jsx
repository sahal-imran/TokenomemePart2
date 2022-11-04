import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Select from "react-select";

// components
import ProfileCard from "../components/Common/ProfileCard";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "none",
    height: "43.88px",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "14.5855px",
    lineHeight: "154%",
    color: "rgba(0, 0, 0, 0.5)",
    padding: "0px 0px 0px 6px",
    borderRadius: "7.29275px",
  }),
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function EditProfile() {
  const [Language, setLanguage] = React.useState("");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          background: "white",
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

        <Box
          sx={{
            width: "100%",
            mt: 12,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            pb: 4,
          }}
        >
          <Box
            sx={{
              width: { md: "871px", xs: "95%" },
              borderRadius: "7px",
              background:
                "linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)",
              p: 0.2,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "5px",
                background: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: {md:"start",xs:"center"},
                flexDirection: "column",
                px: {md:3,xs:1},
                py:3
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: "30px",
                  lineHeight: "36.57px",
                  color: "#000000",
                  textAlign: "center",
                }}
              >
                Personal Information
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 4,
                }}
              >
                {/* Username */}
                <Box
                  sx={{
                    width: "50%",
                    height: "43.88px",
                    background: "#FFFFFF",
                    borderRadius: "7.29275px",
                    boxShadow: "0px 1.21546px 2.43092px rgba(0, 0, 0, 0.05)",
                    border: "1.21546px solid rgba(0, 0, 0, 0.1)",
                    mr: 1,
                    overflow: "hidden",
                  }}
                >
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      outline: "none",
                      boxShadow: "none",
                      fontFamily: "Lato",
                      fontWeight: 400,
                      fontSize: "14.5855px",
                      lineHeight: "154%",
                      color: "rgba(0, 0, 0, 0.5)",
                      padding: "0px 15px",
                    }}
                    placeholder="Username"
                  />
                </Box>
                {/* Email */}
                <Box
                  sx={{
                    width: "50%",
                    height: "43.88px",
                    background: "#FFFFFF",
                    borderRadius: "7.29275px",
                    boxShadow: "0px 1.21546px 2.43092px rgba(0, 0, 0, 0.05)",
                    border: "1.21546px solid rgba(0, 0, 0, 0.1)",
                    ml: 1,
                    overflow: "hidden",
                  }}
                >
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      outline: "none",
                      boxShadow: "none",
                      fontFamily: "Lato",
                      fontWeight: 400,
                      fontSize: "14.5855px",
                      lineHeight: "154%",
                      color: "rgba(0, 0, 0, 0.5)",
                      padding: "0px 15px",
                    }}
                    placeholder="Email Address"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                {/* password */}
                <Box
                  sx={{
                    width: "50%",
                    height: "43.88px",
                    background: "#FFFFFF",
                    borderRadius: "7.29275px",
                    boxShadow: "0px 1.21546px 2.43092px rgba(0, 0, 0, 0.05)",
                    border: "1.21546px solid rgba(0, 0, 0, 0.1)",
                    mr: 1,
                    overflow: "hidden",
                  }}
                >
                  <input
                    type="password"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      outline: "none",
                      boxShadow: "none",
                      fontFamily: "Lato",
                      fontWeight: 400,
                      fontSize: "14.5855px",
                      lineHeight: "154%",
                      color: "rgba(0, 0, 0, 0.5)",
                      padding: "0px 15px",
                    }}
                    placeholder="Password"
                  />
                </Box>
                {/* language */}
                <Box
                  sx={{
                    width: "50%",
                    height: "43.88px",
                    ml: 1,
                    borderRadius: "7.29275px",
                    boxShadow: "0px 1.21546px 2.43092px rgba(0, 0, 0, 0.05)",
                    border: "1.21546px solid rgba(0, 0, 0, 0.1)",
                    // overflow: "hidden",
                  }}
                >
                  <Select
                    placeholder="Language"
                    styles={customStyles}
                    options={options}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  background: "#FFFFFF",
                  borderRadius: "7.29275px",
                  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                  border: "1px solid #D1D5DB",
                  mt: 2,
                }}
              >
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  style={{
                    outline: "none",
                    border: "none",
                    background: "none",
                    width: "100%",
                    height: "100%",
                    minHeight: "160px",
                    maxWidth: "100%",
                    minWidth: "100%",
                    padding: "15px",
                    fontFamily: "Lato",
                    fontWeight: 400,
                    fontSize: "14.5855px",
                    lineHeight: "154%",
                    color: "rgba(0, 0, 0, 0.5)",
                  }}
                  placeholder="Short Description"
                />
              </Box>

              {/* Button */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: {md:"end",xs:"end"},
                  alignItems: "center",
                  mt: 8,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: "19.94px",
                    lineHeight: "30.71px",
                    color: "white",
                    width: "106.98px",
                    height: "49px",
                    boxShadow: "none",
                    background:
                      "linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9",
                    borderRadius: "11.3968px",
                    textTransform:"capitalize"
                  }}
                >
                  Save
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: "19.94px",
                    lineHeight: "30.71px",
                    color: "rgba(0, 0, 0, 0.5)",
                    width: "106.98px",
                    height: "49px",
                    boxShadow: "none",
                    borderRadius: "11.3968px",
                    ml:2,
                    textTransform:"capitalize",
                    border:"1.4246px solid rgba(0, 0, 0, 0.1)",
                    "&:hover":{border:"1.4246px solid rgba(0, 0, 0, 0.1)"}
                  }}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default EditProfile;
