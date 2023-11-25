import React from "react";
import { useState, useEffect } from "react";

import { Box, Typography, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";
function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", flex: 2, height: "90vh" }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        <span style={{ color: "#f31503" }}> Search Result</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}
export default SearchFeed;
