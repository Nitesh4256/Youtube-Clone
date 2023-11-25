import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constant";
import { CheckCircle } from "@mui/icons-material";
function ChannelCard({ channelDetail, marginTop }) {
  return (
    <Box
      sx={{
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        heigth: "326px",
        margin: "auto",
        borderRadius: "20px",
        marginTop: marginTop,
        border: "0px",
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt="channelname"
            sx={{ borderRadius: "50%", height: "180px", width: "180px" }}
          ></CardMedia>
          <Typography variant="h6" sx={{ color: "grey" }}>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "grey", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              subscriber
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
