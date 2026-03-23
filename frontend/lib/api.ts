import axios from "axios";

export const getName = async (url: string) => {
  const res = await axios.get(url);
  console.log("response data:", res.data);
  return res.data;
};