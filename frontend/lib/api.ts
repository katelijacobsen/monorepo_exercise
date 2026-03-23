import axios from "axios";

export const getName = async () => {
  const res = await axios.get(`/api-get-name`);
  return res.data;
};