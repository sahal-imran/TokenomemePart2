import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function PostCard() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "621px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        p: 2,
        background: "#FFFFFF",
        boxShadow: "0px 25px 30px rgba(0, 0, 0, 0.05)",
        borderRadius: "8px",
        mt: 4,
      }}
    >
      {/* Title and more button bar */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Title */}
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
              fontWeight: 700,
              fontSize: { sm: "18px", xs: "16px" },
              lineHeight: "23.92px",
              color: "#823AFF",
              textTransform: "unset",
              textDecoration: "none",
            }}
          >
            Yup for 2 weeks this whole place has only 2 people
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: 400,
              fontSize: { sm: "16px", xs: "14px" },
              lineHeight: "21.26px",
              color: "#000000",
              textTransform: "unset",
              textDecoration: "none",
            }}
          >
            by “pseudo”
          </Typography>
        </Box>
        {/* Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox
            icon={<StarOutlineIcon sx={{ color: "#FB8E00" }} />}
            checkedIcon={<StarIcon sx={{ color: "#FB8E00" }} />}
          />
          <IconButton sx={{ mx: 1 }}>
            <Image
              src={"/assets/pictures/addtocart.svg"}
              alt={"Logo"}
              width={26}
              height={26}
              objectFit="contain"
            />
          </IconButton>
          <IconButton>
            <MoreHorizIcon sx={{ color: "#FB8E00" }} />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "414px",
          my: 2,
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <Image
          src={"/assets/pictures/post.svg"}
          alt={"Logo"}
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton sx={{ mr: { sm: 2, xs: 0.5 } }}>
          <Image
            src={"/assets/pictures/sad.svg"}
            alt={"Logo"}
            width={38}
            height={38}
            objectFit="contain"
          />
        </IconButton>
        <IconButton>
          <Image
            src={"/assets/pictures/cool.svg"}
            alt={"Logo"}
            width={38}
            height={38}
            objectFit="contain"
          />
        </IconButton>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "26.58px",
            color: "#211E1E",
            textTransform: "unset",
            textDecoration: "none",
            mx: { sm: 4, xs: 2 },
          }}
        >
          86% (20)
        </Typography>
        <IconButton sx={{ mr: { sm: 2, xs: 0.5 } }}>
          <Image
            src={"/assets/pictures/imessage.svg"}
            alt={"Logo"}
            width={40}
            height={40}
            objectFit="contain"
          />
        </IconButton>
        <IconButton>
          <Image
            src={"/assets/pictures/share.svg"}
            alt={"Logo"}
            width={40}
            height={40}
            objectFit="contain"
          />
        </IconButton>
      </Box>
    </Box>
  );
}

export default PostCard;
