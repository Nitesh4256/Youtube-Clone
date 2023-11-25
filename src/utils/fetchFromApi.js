import axios from "axios";

const Base_Url = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: Base_Url,
  params: {
    part: "snippet",
    maxResults: "50",

    videoId: "M7FIvfx5J10",
  },
  headers: {
    "X-RapidAPI-Key": "7af9339b9emsh407bd7e4290a187p1482cfjsna978af313d95",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${Base_Url}/${url}`, options);

  return data;
};
