import axios from "axios";

// Get the data
export const getName = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};

