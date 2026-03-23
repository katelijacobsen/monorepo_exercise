import axios from 'axios'

export const getName = (url: string) =>
  axios.get(url).then(res => res.data)