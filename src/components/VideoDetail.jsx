import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos, video } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
    });

    fetchFromApi(`search?part=snippet&relatedToVideosId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
  console.log(videoDetail);

  if (!videoDetail?.snippet) {
    return "Loading...";
  }
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}></Box>

          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          <Typography color={"#fff"} variant="h5" fontWeight="bold" p={2}>
            {videoDetail?.snippet.channelTitle}
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between
          "
            sx={{ color: "#fff" }}
            py={1}
            px={2}
          >
            <Link to={`/channel${channelId}`}>
              <Typography variant={{ sm: "subtitle1", md: "h6" }} color="#fff">
                {channelTitle}
                <CheckCircle
                  sx={{ fontsize: "12px", color: "grey", ml: "5px" }}
                />
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" color="#fff" sx={{ opacity: "0.6" }}>
                {" "}
                {viewCount} views
              </Typography>
              <Typography variant="body1" color="#fff" sx={{ opacity: "0.6" }}>
                {" "}
                {likeCount} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Videos videos={videos} direction="column" />
      </Box>
    </Box>
  );
}

export default VideoDetail;
