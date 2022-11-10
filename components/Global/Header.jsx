import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import Anchorlink from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Divide as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
//import styles 👇
import "react-modern-drawer/dist/index.css";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const settings = ["Profile"];

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: { md: "100px", xs: "70px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          px: { md: 2, xs: 2 },
        }}
      >
        {/* Logo for phone */}
        <Box
          sx={{
            position: "relative",
            width: "46px",
            height: "60px",
            display: { md: "none", xs: "block" },
          }}
        >
          <Image
            src={"/assets/pictures/logo.svg"}
            alt={"Logo"}
            layout="fill"
            objectFit="contain"
          />
        </Box>

        {/* Left */}
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "100px",
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
            Create
          </Button>
          <Link href={""}>
            <Anchorlink
              sx={{
                ml: 1,
                fontFamily: "Lato",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "156.5%",
                color: "#413C58",
                mx: 2,
                textTransform: "unset",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Template
            </Anchorlink>
          </Link>
          <Link href={""}>
            <Anchorlink
              sx={{
                ml: 1,
                fontFamily: "Lato",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "156.5%",
                color: "#413C58",
                textTransform: "unset",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Troll Events
            </Anchorlink>
          </Link>
        </Box>

        {/* Middle */}
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={""}>
            <Anchorlink
              sx={{
                ml: 1,
                fontFamily: "Lato",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "156.5%",
                color: "#413C58",
                textTransform: "unset",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Just-to-Laugh
            </Anchorlink>
          </Link>
          {/* Logo */}
          <Link href={"/"}>
            <Anchorlink
              sx={{
                position: "relative",
                width: "66px",
                height: "70px",
                mx: 2,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Image
                src={"/assets/pictures/logo.svg"}
                alt={"Logo"}
                layout="fill"
                objectFit="contain"
              />
            </Anchorlink>
          </Link>
          <Link href={"/marketplace"}>
            <Anchorlink
              sx={{
                ml: 1,
                fontFamily: "Lato",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "156.5%",
                color: "#413C58",
                textTransform: "unset",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Meme Marketplace
            </Anchorlink>
          </Link>
        </Box>

        {/* Right */}
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={""}>
            <Anchorlink
              sx={{
                ml: 1,
                fontFamily: "Lato",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "156.5%",
                color: "#413C58",
                textTransform: "unset",
                textDecoration: "none",
                cursor: "pointer",
                mr: 2,
              }}
            >
              About us
            </Anchorlink>
          </Link>
          <Box
            sx={{
              position: "relative",
              width: "24px",
              height: "24px",
              mr: 2,
            }}
          >
            <Image
              src={"/assets/pictures/Bell.svg"}
              alt={"Logo"}
              layout="fill"
              objectFit="contain"
            />
          </Box>

          {/* Avatar */}
          <Avatar
            alt="Sahal Imran"
            src="/assets/pictures/Sahal.jpg"
            sx={{ width: 32, height: 32, mr: 1.5 }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Lato",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "19.2px",
                color: "#413C58",
                textTransform: "unset",
                textDecoration: "none",
                mr: 1,
              }}
            >
              Sahal Imran
            </Typography>
            <Tooltip title="Menu">
              <Box onClick={handleOpenUserMenu}>
                <Image
                  src={"/assets/pictures/ArrowDown.svg"}
                  alt={"Logo"}
                  width={14}
                  height={10}
                  objectFit="contain"
                />
              </Box>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link href={"/profile"}>
                  <Typography textAlign="center">Profile</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Hamburgar */}
        <Box sx={{ display: { md: "none", xs: "flex" } }}>
          <Hamburger rounded size={28} toggled={isOpen} toggle={setOpen} />
        </Box>
      </Box>

      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        direction="left"
        className="Drawer"
        style={{
          width: "100%",
          background:
            "linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)",
          padding: "10px 8px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Link href={"/profile"}>
            <Box
              onClick={() => setOpen(false)}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Sahal Imran"
                src="/assets/pictures/Sahal.jpg"
                sx={{ width: 50, height: 50 }}
              />
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "19.2px",
                  color: "white",
                  textTransform: "unset",
                  textDecoration: "none",
                  ml: 1,
                }}
              >
                Sahal Imran
              </Typography>
            </Box>
          </Link>
          <Hamburger
            color="white"
            rounded
            size={28}
            toggled={isOpen}
            toggle={setOpen}
          />
        </Box>

        <Link href={""}>
          <Anchorlink
            onClick={() => setOpen(false)}
            sx={{
              fontFamily: "Lato",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "156.5%",
              color: "white",
              textTransform: "unset",
              textDecoration: "none",
              cursor: "pointer",
              mt: 4,
            }}
          >
            Template
          </Anchorlink>
        </Link>
        <Link href={""}>
          <Anchorlink
            onClick={() => setOpen(false)}
            sx={{
              fontFamily: "Lato",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "156.5%",
              color: "white",
              textTransform: "unset",
              textDecoration: "none",
              cursor: "pointer",
              mt: 1,
            }}
          >
            Troll Events
          </Anchorlink>
        </Link>
        <Link href={""}>
          <Anchorlink
            onClick={() => setOpen(false)}
            sx={{
              fontFamily: "Lato",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "156.5%",
              color: "white",
              textTransform: "unset",
              textDecoration: "none",
              cursor: "pointer",
              mt: 1,
            }}
          >
            Just-to-Laugh
          </Anchorlink>
        </Link>
        <Link href={"/marketplace"}>
          <Anchorlink
            onClick={() => setOpen(false)}
            sx={{
              fontFamily: "Lato",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "156.5%",
              color: "white",
              textTransform: "unset",
              textDecoration: "none",
              cursor: "pointer",
              mt: 1,
            }}
          >
            Meme Marketplace
          </Anchorlink>
        </Link>
        <Link href={""}>
          <Anchorlink
            onClick={() => setOpen(false)}
            sx={{
              fontFamily: "Lato",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "156.5%",
              color: "white",
              textTransform: "unset",
              textDecoration: "none",
              cursor: "pointer",
              mt: 1,
            }}
          >
            About us
          </Anchorlink>
        </Link>
        <Button
          variant="contained"
          sx={{
            width: "151px",
            height: "38px",
            background: "white",
            borderRadius: "60px",
            boxShadow: "none",
            fontFamily: "Montserrat",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "154%",
            color: "#413C58",
            p: 0,
            textTransform: "unset",
            "&:hover": { background: "white" },
            mt: 2,
          }}
        >
          Create a Post
        </Button>
      </Drawer>
    </>
  );
}

export default Header;
